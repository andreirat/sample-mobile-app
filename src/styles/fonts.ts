const fonts = {
  primary: {
    black: {
      normal: 'Merriweather-Black',
      italic: 'Merriweather-BlackItalic',
    },
    bold: {
      normal: 'Merriweather-Bold',
      italic: 'Merriweather-BoldItalic',
    },

    light: {
      normal: 'Merriweather-Light',
      italic: 'Merriweather-LightItalic',
    },
    regular: {
      normal: 'Merriweather-Regular',
    },
  },
};

const fontVariants = {
  H1: {
    fontSize: 40,
    fontFamily: fonts.primary.black.normal,
  },
  H2: {
    fontSize: 24,
    fontFamily: fonts.primary.bold.normal,
  },
  H3: {
    fontSize: 18,
    fontFamily: fonts.primary.bold.normal,
  },
  Body: {
    fontSize: 14,
    fontFamily: fonts.primary.regular.normal,
  },
};

export { fonts, fontVariants };
