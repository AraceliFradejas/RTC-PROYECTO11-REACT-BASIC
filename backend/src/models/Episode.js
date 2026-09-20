import mongoose from 'mongoose';

const translationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    summary: { type: String, default: '' },
  },
  { _id: false },
);

const episodeSchema = new mongoose.Schema(
  {
    tmdbId: { type: Number, required: true, unique: true, min: 1 },
    season: { type: Number, required: true, min: 0 },
    number: { type: Number, required: true, min: 1 },
    airDate: String,
    translations: {
      es: translationSchema,
      en: { type: translationSchema, required: true },
      de: translationSchema,
    },
    sourceUrl: { type: String, required: true },
    image: {
      url: String,
      publicId: String,
      author: String,
      source: String,
      license: String,
    },
  },
  { timestamps: true },
);

episodeSchema.index({ season: 1, number: 1 });
export const Episode = mongoose.model('Episode', episodeSchema);
