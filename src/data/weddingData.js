/**
 * Single Data Structure for Wedding Invitation Details
 * Vinay & Kishma — Sunday, 25th October 2026
 */

export const WEDDING_COUPLE = {
  groom: {
    name: 'Vinay',
    role: 'The Groom',
    relation: 'Son of',
    parents: 'Mrs. Aarthi & Mr. Shashi Bhushan Sahani',
    heritage: 'Sahani Family',
  },
  bride: {
    name: 'Kishma',
    role: 'The Bride',
    relation: 'Daughter of',
    parents: 'Mrs. Sangita & Mr. Francis Xavier',
    heritage: 'Xavier Family',
  },
};

export const WEDDING_MESSAGES = {
  sacredInvocation: '॥ श्री गणेशाय नमः ॥',
  invocationMeaning: 'Shree Ganeshaya Namaha',
  leadQuote: 'Two Hearts. Two Traditions. One Beautiful Beginning.',
  invitationText:
    'With hearts full of joy, we invite you to join us as we tie the knot and celebrate with the dearest people in our hearts.',
  blessing:
    'Request the honour of your gracious presence and heartfelt blessings on our auspicious wedding day.',
};

export const WEDDING_EVENTS = [
  {
    id: 'mehendi',
    title: 'Mehendi',
    day: 'Saturday',
    date: '24th October 2026',
    time: '11:00 AM onwards',
    description: 'An auspicious morning of intricate henna, folk melodies, and celebration.',
    motif: 'lotus',
    accentColor: '#176B70', // Peacock Teal
  },
  {
    id: 'haldi',
    title: 'Haldi',
    day: 'Saturday',
    date: '24th October 2026',
    time: '3:00 PM onwards',
    description: 'A vibrant ritual of sacred turmeric, love, laughter, and family blessings.',
    motif: 'sun-bloom',
    accentColor: '#C6A66B', // Antique Gold
  },
  {
    id: 'sangeet',
    title: 'Sangeet',
    day: 'Saturday',
    date: '24th October 2026',
    time: '7:00 PM onwards',
    description: 'A magical royal evening of music, dance, laughter, and celebratory performances.',
    motif: 'peacock',
    accentColor: '#315A78', // Muted Royal Blue
  },
  {
    id: 'muhurtham',
    title: 'Muhurtham Ceremony',
    day: 'Sunday',
    date: '25th October 2026',
    time: '10:00 AM – 11:00 AM',
    description: 'The sacred union of two souls amidst Vedic hymns, holy fire, and timeless traditions.',
    motif: 'palace-crest',
    accentColor: '#174C3C', // Deep Emerald
    isMain: true,
  },
  {
    id: 'reception',
    title: 'Reception',
    day: 'Sunday',
    date: '25th October 2026',
    time: '6:30 PM onwards',
    description: 'A grand celebratory banquet with dinner, toasts, and joyful beginnings.',
    motif: 'lotus-crest',
    accentColor: '#C6A66B', // Antique Gold
  },
];

export const WEDDING_DATE_CONFIG = {
  targetDateISO: '2026-10-25T10:00:00', // Muhurtham Ceremony Time
  displayDate: 'Sunday, 25th October 2026',
  displayYear: '2026',
};

export const WEDDING_VENUE = {
  name: 'Tranquil Wedding Venue',
  address: [
    'Near Sudarshan Vidya Mandir School Road,',
    'Muthathi Anjaneya Temple Road,',
    'Laxmipura Kere, Sakalavara Road,',
    'Next to Miraya Greens, Bannerghatta Road,',
    'Bangalore – 560083',
  ],
  // Coordinates for Tranquil Wedding Venue, Bannerghatta Road, Bangalore
  lat: 12.8708,
  lng: 77.5844,
  googleMapsSearchUrl:
    'https://www.google.com/maps/search/Tranquil+Wedding+Venue,+Sakalavara+Road,+Bannerghatta+Road,+Bangalore+560083',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2!2d77.5844!3d12.8708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVHJhbnF1aWwgV2VkZGluZyBWZW51ZQ!5e1!3m2!1sen!2sin!4v1',
};

export const CALENDAR_EVENTS = [
  {
    title: 'Vinay & Kishma – Mehendi',
    startISO: '2026-10-24T11:00:00',
    endISO: '2026-10-24T14:30:00',
    description:
      'Mehendi Ceremony — An auspicious morning of intricate henna, folk melodies and celebration. Tranquil Wedding Venue, Bannerghatta Road, Bangalore.',
    location: 'Tranquil Wedding Venue, Bannerghatta Road, Bangalore 560083',
  },
  {
    title: 'Vinay & Kishma – Haldi',
    startISO: '2026-10-24T15:00:00',
    endISO: '2026-10-24T18:00:00',
    description:
      'Haldi Ceremony — A vibrant ritual of sacred turmeric, love, laughter and family blessings.',
    location: 'Tranquil Wedding Venue, Bannerghatta Road, Bangalore 560083',
  },
  {
    title: 'Vinay & Kishma – Sangeet',
    startISO: '2026-10-24T19:00:00',
    endISO: '2026-10-24T23:00:00',
    description:
      'Sangeet Ceremony — A magical royal evening of music, dance, laughter and celebratory performances.',
    location: 'Tranquil Wedding Venue, Bannerghatta Road, Bangalore 560083',
  },
  {
    title: 'Vinay & Kishma – Muhurtham Ceremony',
    startISO: '2026-10-25T10:00:00',
    endISO: '2026-10-25T11:00:00',
    description:
      'Muhurtham — The sacred union of two souls amidst Vedic hymns, holy fire, and timeless traditions. Two Hearts. Two Traditions. One Beautiful Beginning.',
    location: 'Tranquil Wedding Venue, Bannerghatta Road, Bangalore 560083',
  },
  {
    title: 'Vinay & Kishma – Reception',
    startISO: '2026-10-25T18:30:00',
    endISO: '2026-10-25T23:00:00',
    description:
      'Reception — A grand celebratory banquet with dinner, toasts, and joyful beginnings.',
    location: 'Tranquil Wedding Venue, Bannerghatta Road, Bangalore 560083',
  },
];

