export const VALIDATION_PATTERNS: Record<'name' | 'email' | 'textarea', RegExp> = {
    name: /^[\s-,.AБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШабвгдђежзијклљмнњопрстћуфхцчџшA-Za-zA-Ža-ž:/.!?]+$/,
    email: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
    textarea:   /^(?=.*\S)[\s\S]*$/
  };

  export const errorMessages: any = {
    name: {
      en: "Please enter a valid name. Only letters and spaces are allowed.",
      'sr-Cyrl': "Молимо вас да унесете важеће име. Дозвољена су само слова и размак."
    },
    email: {
      en: "Please enter a valid email address.",
      'sr-Cyrl': "Молимо вас да унесете важећу адресу електронске поште."
    },
    textarea: {
      en: "Please enter your message.",
      'sr-Cyrl': "Молимо вас да унесете вашу поруку."
    }
  };