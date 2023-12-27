const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const softDelete = require('mongoose-delete');

const Courses = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name' },
    // deleted: { type: Boolean, default: 'false' }
  },
  {
    timestamps: true
  }
);

mongoose.plugin(slug);
Courses.plugin(softDelete, { overrideMethods: 'all', deletedAt: true });
module.exports = mongoose.model('Course', Courses);
