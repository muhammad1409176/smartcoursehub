const mongoose = require('mongoose');
require('dotenv').config({ path: require('path').resolve(__dirname, '..', '.env') });
require('../models/User');
require('../models/Course');
const Enrollment = require('../models/Enrollment');

async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const id = '69b7c4a7dc33d93662dff62c'; // enrollment to update
    const en = await Enrollment.findById(id);
    if (!en) {
      console.log('Enrollment not found:', id);
      return process.exit(1);
    }

    en.notesCompleted = true;

    // Recalculate progress using all 5 components
    const parts = ['notesCompleted','pdfCompleted','playlistCompleted','videoCompleted','guidanceCompleted'];
    const completed = parts.reduce((acc, k) => acc + (en[k] ? 1 : 0), 0);
    en.progress = Math.round((completed / parts.length) * 100);

    await en.save();
    console.log('Updated enrollment:', en._id.toString(), 'progress=', en.progress);
    console.log('Completion status:', {
      notesCompleted: en.notesCompleted,
      pdfCompleted: en.pdfCompleted,
      playlistCompleted: en.playlistCompleted,
      videoCompleted: en.videoCompleted,
      guidanceCompleted: en.guidanceCompleted
    });

    await mongoose.disconnect();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();