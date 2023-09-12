const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactions = new Schema(
	{
		day: {
			type: String,
			required: true,
		},

		month: {
			type: String,
			required: true,
		},
		sector: {
			type: String,
			enum: [
				'pets',
				'home',
				'foods',
				'cards',
				'health',
				'others',
				'savings',
				'service',
				'personal',
				'transport',
			],
		},
		category: {
			type: String,
			enum: [
				'car',
				'gim',
				'meat',
				'visa',
				'phone',
				'gifts',
				'dress',
				'loans',
				'fixes',
				'foods',
				'butane',
				'bakery',
				'saving',
				'public',
				'rental',
				'health',
				'master',
				'salary',
				'others',
				'outlets',
				'grocery',
				'doctors',
				'internet',
				'pharmacy',
				'children',
				'education',
				'investment',
				'financial',
				'vegetables',
				'supermarket',
				'electricity',
				'hairdresser',
				'other entries',
				'hardware store',
			],
			required: true,
		},
		subCategory: {
			type: String,
			enum: [
				'fuel',
				'tax',
				'spares',
				'cleanup',
				'parking',
				'insurance',
				'arrangements',
			],
		},
		amount: {
			type: Number,
			required: true,
		},
		type: {
			type: String,
			enum: ['egress', 'entry'],
		},
	},
	{
		timestamps: true,
	},
);
module.exports = mongoose.model('Cash', transactions);
