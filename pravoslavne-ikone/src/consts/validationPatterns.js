export const VALIDATION_PATTERNS = {
    name: /^[\s-,.AБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШабвгдђежзијклљмнњопрстћуфхцчџшA-Za-zA-Ža-ž:/.!?]+$/,
    phone: /^(\+)?[\s0-9-]+$/,
    email: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
    subject:  /^.+$/, 
    textarea:   /^(?=.*\S)[\s\S]*$/
  };

  export const errorMessages = {
    name: {
      en: "Please enter a valid name. Only letters and spaces are allowed.",
      'sr-Cyrl': "Молимо вас да унесете важеће име. Дозвољена су само слова и размак."
    },
    email: {
      en: "Please enter a valid email address.",
      'sr-Cyrl': "Молимо вас да унесете важећу адресу електронске поште."
    },
    phone: {
      en: "Please enter a valid phone number. You may include spaces, dashes, or a '+' sign.",
      'sr-Cyrl': "Молимо вас да унесете важећи број телефона. Можете укључити размаке, цртице или знак '+'."
    },
    subject: {
      en: "Please provide a subject.",
      'sr-Cyrl': "Молимо вас да наведете тему."
    },
    textarea: {
      en: "Please enter your message.",
      'sr-Cyrl': "Молимо вас да унесете вашу поруку."
    }
  };