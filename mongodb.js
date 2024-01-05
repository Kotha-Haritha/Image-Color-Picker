const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors({
    useNewUrlParser : true
}))

mongoose.connect('mongodb+srv://colorpicker:colorpicker@cluster0.vhqydg0.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const colorSchema = new mongoose.Schema({
  hexaCode: String,
});

const Color = mongoose.model('Color', colorSchema);

app.use(bodyParser.json());

app.post('/api/colors', async (req, res) => {
  const hexaCode = req.body.hexaCode
  console.log(hexaCode)
  const color = new Color({
    hexaCode
  });

  try {
    const newColor = await color.save();
    return res.status(201).json(newColor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});