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
  secondary: {
    bold: {
      normal: 'OpenSans-Bold',
    },
    semiBold: {
      normal: 'OpenSans-SemiBold',
    },
    regular: {
      normal: 'OpenSans-Regular',
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
  Body2: {
    fontSize: 16,
    fontFamily: fonts.secondary.regular.normal,
  },
  Body3: {
    fontSize: 17,
    fontFamily: fonts.secondary.semiBold.normal,
  },
  Body4: {
    fontSize: 12,
    fontFamily: fonts.secondary.semiBold.normal,
  },
  Body5: {
    fontSize: 14,
    fontFamily: fonts.secondary.regular.normal,
  },
  Body6: {
    fontSize: 16,
    fontFamily: fonts.secondary.bold.normal,
  },
};

export { fonts, fontVariants };
