import { User } from '../models/user';
import { generateAccessToken } from '../helpers/utils';

export const add = async (req, res) => {
  const body = req.body;

  var user = new User({
    name: body.name,
    email: body.email,
    password: body.password
  });

  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteSingle = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getSingle = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // If authentication is successful, generate and send an access token
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).send('Invalid email or password');
    }

    const accessToken = generateAccessToken(user);
    res.json({ accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
