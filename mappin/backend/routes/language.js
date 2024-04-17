
const express = require('express');
const languageRoutes = express.Router();

languageRoutes.post('/set_language', (req, res) => {
    const { language } = req.body;
    var lngs = req.languages // ['de-CH', 'de', 'en']
    if (!language) {
      return res.status(400).json({ error: 'Language information is missing' });
    }
  
    // Use the selected language for localization (e.g., with i18next)
    req.i18n.changeLanguage(language, (err, t) => {
      if (err) {
        console.error('Error setting language:', err);
        return res.status(500).json({ error: 'Failed to set language' });
      }
      console.log(req.i18n)
      // Respond with a success message
      res.status(200).json({ message: 'Language set successfully' });
    });
  });

  module.exports = languageRoutes;