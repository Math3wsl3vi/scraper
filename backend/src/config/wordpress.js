require('dotenv').config();

const wordpressConfig = {
  baseURL: process.env.WP_BASE_URL,
  apiEndpoint: process.env.WP_API_ENDPOINT || '/wp-json/wp/v2',
  auth: {
    username: process.env.WP_USERNAME,
    password: process.env.WP_APP_PASSWORD
  },
  endpoints: {
    events: '/tribe_events',
    posts: '/posts',
    media: '/media'
  },
  defaultEventSettings: {
    status: 'publish',
    featured: false,
    all_day: false,
    timezone: 'Europe/Copenhagen', // Adjust based on your location
    show_map_link: true,
    show_map: false
  }
};

// WordPress API headers
const getWPHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Basic ${Buffer.from(`${wordpressConfig.auth.username}:${wordpressConfig.auth.password}`).toString('base64')}`
});

// Format match data for WordPress Events Calendar
const formatMatchForWP = (matchData) => {
  const startDateTime = new Date(`${matchData.match_date}T${matchData.match_time}`);
  const endDateTime = new Date(startDateTime.getTime() + (2 * 60 * 60 * 1000)); // Add 2 hours
  
  return {
    title: `${matchData.home_team} vs ${matchData.away_team}`,
    content: `Match between ${matchData.home_team} and ${matchData.away_team} at ${matchData.venue}`,
    status: 'publish',
    start_date: startDateTime.toISOString(),
    end_date: endDateTime.toISOString(),
    all_day: false,
    venue: {
      venue: matchData.venue,
      address: matchData.venue
    },
    organizer: {
      organizer: matchData.union_name || 'Calendar Scraper'
    },
    categories: [matchData.age_group, matchData.pool].filter(Boolean),
    tags: [matchData.home_team, matchData.away_team].filter(Boolean)
  };
};

module.exports = {
  wordpressConfig,
  getWPHeaders,
  formatMatchForWP
};