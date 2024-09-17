/* eslint-disable @typescript-eslint/no-explicit-any */
export const theme: any = {
  // breakpoints: ['100px', '570px', '768px', '1024px', '1200px', '1400px'],
  breakpoints: ['480px', '570px', '768px', '1024px', '1200px', '1400px'],
  fonts: {
    heading: 'Mulish'
  },
  '--fs-7': '0.875rem',
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#444142',
    secondary: '#e60f3d',
    eerieBlack: '#232F3E', // Define eerie black for reuse
    black: '#000',
  },
  containers: {
    headerMain: {
      backgroundColor: 'black',
      padding: '25px 0',
      container: {
        display: ['block', 'block', 'flex'],
        // padding: ['25px 0'],
        // paddingLeft: [0, 0, 0, 0, 15, 255],
        // paddingRight: [0, 0, 0, 0, 15, 255],
        alignItems: ['normal', 'normal', 'center'], // Flexbox align items,
        justifyContent: ['normal', 'normal', 'space-between'],
        maxWidth: [
          '100%',   // No change for 570px
          '750px',  // min-width 768px
          '980px',  // min-width 1024px
          '1200px', // min-width 1200px
          '1350px', // min-width 1400px
        ],
        // margin: [0, 0, 0, 'auto'],
        margin: 'auto',

        gap: [0, 0, '80px'],
        padding: '0 15px'

      }
    },
    headerTop: {
      display: ['none', 'block', 'block', 'flex'], // flexbox starts from 570px
      justifyContent: ['normal', 'normal', 'space-between'],
      alignItems: ['normal', 'normal', 'center'],
      backgroundColor: 'eerieBlack',
      padding: ['0', '10px 0'],
      flexGrow: 1
    },
    headerSearchContainer: {
      background: '#fff',
      height: 45,
      width: '100%',
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: [0, 0, 0, 0, 0, 5],
    },
    container: {
      maxWidth: [
        '100%',   // min-width 100px
        '100%',   // No change for 570px
        '750px',  // min-width 768px
        '980px',  // min-width 1024px
        '1024px', // min-width 1200px
        '2350px', // min-width 1400px
      ],
      display: ['block', 'block', 'flex'],
      justifyContent: ['normal', 'normal', 'space-between'],
      // padding: '0 15px', // Apply padding to all containers,
      flexDirection: 'row',
      alignItems: ['normal', 'normal', 'center'], // Flexbox align items
      // paddingLeft: [0, 255],
      // paddingRight: [0, 255],
      paddingLeft: [0, 0, 0, 0, 15, 255],
      paddingRight: [0, 0, 0, 0, 15, 255],
      margin: [0, 0, 0, 'auto'],
    },
  },

  container: {
    padding: '0 15px',
    margin: ['', '', 'auto', 'auto', 'auto', 'auto'],
    maxWidth: ['', '', '', '750px', '980px', '1200px', '1350px']
  },

  navigation: {
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'center', gap: 4, fontSize: 2, fontWeight: 600, position: 'relative',
    marginBottom: '1rem',
    '@media screen and (max-width: 768px)': {
      display: 'none'
    },
    marginTop: '1rem',
  },

  /*-----------------------------------*\
 #BANNER
  \*-----------------------------------*/
  bannerStyles: {
    banner: {
      margin: '30px 0',
    },
    sliderContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      borderRadius: '10px',
      overflowX: 'auto',
      overflowY: 'hidden',
      scrollSnapType: 'inline mandatory',
      overscrollBehaviorX: 'contain',
    },
    sliderItem: {
      position: 'relative',
      minWidth: '100%',
      maxHeight: '450px',
      aspectRatio: ['5 / 3', '4 / 2', 'auto'],
      height: ['auto', '350px'],
      borderRadius: '10px',
      overflow: 'hidden',
      scrollSnapAlign: 'start',
    },
    bannerImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: ['right', '', '', '', 'top'],
      display: 'none'

    },
    dot: {
      height: ['8px', '8px', '10px'],
      width: ['8px', '8px', '10px'],
      margin: '0 2px',
      backgroundColor: '#bbb',
      borderRadius: '50%',
      display: 'inline-block',
      textAlign: 'center',
      transition: 'background-color 0.6s ease',
    },
    dotPoints: {
      textAlign: 'center',
    },
    active: {
      backgroundColor: '#CC0C39',
    },
    fade: {
      animationName: 'fade',
      animationDuration: '1.5s',
    },
  },

  /*-----------------------------------*\
  #CATEGORY
  \*-----------------------------------*/

  categoryStyles: {
    category: {
      marginBottom: '30px',
    },
    categoryItemContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: ['10px', '30px'],
      overflowX: 'auto',
      overflowY: 'hidden',
      scrollSnapType: 'inline mandatory',
      overscrollBehaviorX: 'contain',
    },
    categoryItem: {
      minWidth: ['100%', 'calc(50% - 15px)', 'calc(33.33% - 20px)', 'calc(25% - 22.5px)'],
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '15px',
      border: '1px solid #ededed',
      borderRadius: '10px',
      scrollSnapAlign: 'start',
    },
    categoryImgBox: {
      background: '#ededed',
      border: '1px solid hsl(0, 0%, 80%)',
      padding: '10px',
      borderRadius: '5px',
    },
    categoryContentBox: {
      width: '100%',
    },
    categoryContentFlex: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    categoryItemTitle: {
      color: '#232F3E',
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase',
    },
    categoryItemAmount: {
      color: 'var(--sonic-silver)',
      fontSize: 'var(--fs-11)',
    },
    categoryBtn: {
      color: '#cc0c39',
      fontSize: '0.75rem',
      fontWeight: '500',
      textTransform: 'capitalize',
      display: 'block',
      textDecoration: 'none'
    },
  },

  //   <!--
  //   - PRODUCT
  // -->

  productContainer: {
    container: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '30px',
      marginBottom: '30px',
    },
    sidebar: {
      top: [0, '', '', '', '30px'],
      left: ['100%', '', '', '', 0],
      padding: ['30px', '', '', '', 0],
      minWidth: ['', '', '', '', 'calc(25% - 15px)'],
      marginBottom: '30px',
      overflowY: ['scroll', '', '', 'auto'],
      overscrollBehavior: ['contain', '', '', 'auto'],
      zIndex: [20, '', '', '', 0],
      visibility: ['hidden', 'hidden', 'hidden', 'hidden', 'visible'],
      maxWidth: '320px',
      width: '100%',
      bottom: 0,
      backgroundColor: '#fff',
      position: ['fixed', '', '', '', 'sticky']
    },
    sidebarCategory: {
      padding: '20px',
      marginBottom: '30px',
      border: '1px solid #ededed',
      borderRadius: '10px',
      minWidth: ['', '', '', 'calc(25% - 15px)'],
    },
    sidebarTop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    showcaseHeading: {
      fontSize: '0.941rem',       // Ensure this variable is defined in your theme or use a fixed size
      fontWeight: '600', // Ensure this variable is defined in your theme or use a fixed weight
      color: '#454545',         // Ensure this variable is defined in your theme or use a fixed color
      textTransform: 'uppercase',
      letterSpacing: '0.8px',
      marginBottom: '15px',
    },
    showCase: {
      alignItems: 'center',
      display: 'flex',
      gap: '15px',
      marginBottom: '15px'
    },
    showcaseImg: {
      borderRadius: '5px'
    },
    showcaseContent: {
      width: 'calc(100% - 90px)'
    },
    showcaseTitle: {
      color: '#454545',            // Ensure this variable is defined in your theme or use a fixed color
      fontSize: '0.874rem',         // Ensure this variable is defined in your theme or use a fixed size
      fontWeight: '400', // Ensure this variable is defined in your theme or use a fixed weight
      textTransform: 'capitalize',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',        // `-o-text-overflow` is not needed as it's for older versions of Opera
      letterSpacing: '0.5px',
    },
    showcaseRating: {
      display: 'flex',                // Using standard `flex` display
      alignItems: 'center',          // Align items vertically to the center
      color: '#ffa41c',  // Ensure this variable is defined in your theme or use a fixed color
      fontSize: '13px',              // Fixed font size
      padding: '4px 0',
    },
    priceBox: {
      display: 'flex',                // Using standard `flex` display
      alignItems: 'center',          // Align items vertically to the center
      gap: '15px',
    },
    del: {
      color: '#565959',
      fontSize: '13px',
    },
    price: {
      fontSize: '0.875rem',      // Ensure this variable is defined in your theme or use a fixed size
      fontWeight: '600', // Ensure this variable is defined in your theme or use a fixed weight
      color: '#0f1111',
    },

    // New Arrival
    productBox: {
      minWidth: ['', '', '', '', 'calc(75% - 15px)']
    },
    productMinimal: {
      marginBottom: '30px',
      display: ['', '', 'flex'],
      flexWrap: ['', '', 'wrap'],
      justifyContent: ['', '', 'center'],
      gap: ['', '', '20px'],

      showcaseTitle: {
        color: '#232f35',            // Ensure this variable is defined in your theme or use a fixed color
        fontSize: '0.875rem',         // Ensure this variable is defined in your theme or use a fixed size
        fontWeight: '600', // Ensure this variable is defined in your theme or use a fixed weight
        textTransform: 'capitalize',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',        // `-o-text-overflow` is not needed as it's for older versions of Opera
        letterSpacing: '0.5px',
      },

      price: {
        fontSize: '0.875rem',      // Ensure this variable is defined in your theme or use a fixed size
        fontWeight: '700', // Ensure this variable is defined in your theme or use a fixed weight
        color: '#cc0c39',
      },

      showcaseContent: {
        width: 'calc(100% - 85px)'
      },

      priceBox: {
        display: 'flex',                // Using standard `flex` display
        alignItems: 'center',          // Align items vertically to the center
        gap: '10px',
      },
    },
    productShowCase: {
      marginBottom: '10px',
      minWidth: ['', '', '', 'calc(50% - 10px)', 'calc(33.33% - 14px)'],
      width: ['', '', '', 'calc(50% - 10px)', 'calc(33.33% - 14px)'],
      flexGrow: ['', '', '', '', 1]
    },
    title: {
      color: '#232F3E',         // Ensure this variable is defined in your theme
      fontSize: '1rem',             // Ensure this variable is defined in your theme or use a fixed size
      fontWeight: '600',     // Ensure this variable is defined in your theme or use a fixed weight
      letterSpacing: '0.4px',              // Adjust letter spacing
      textTransform: 'capitalize',         // Capitalize text
      paddingBottom: '10px',               // Padding at the bottom
      borderBottom: '1px solid #ededed',  // Bottom border with a variable color
      marginBottom: '30px',                // Bottom margin
    },
    showCaseWrapper: {
      gap: ['', '', '', '', '10px'],
      display: 'flex',                          // Flexbox display
      alignItems: 'center',                     // Align items to center
      overflowX: 'auto',                        // Horizontal overflow
      overscrollBehaviorX: 'contain',           // Prevent overscrolling
      scrollSnapType: 'inline mandatory',       // Scroll snapping for inline items

      // WebKit and MS specific styles
      webkitOverflowScrolling: 'touch',         // Smooth scrolling for iOS
      webkitScrollSnapType: 'inline mandatory', // Scroll snapping for WebKit browsers
      msScrollSnapType: 'inline mandatory',     // Scroll snapping for IE/Edge
      paddingBottom: '5px'
    },
    showCaseContainer: {
      minWidth: ['', '', '50%', '100%'],
      padding: '0 5px',
      scrollSnapAlign: 'start'
    },
    showCaseCategory: {
      width: 'max-content',             // Set width to max-content
      color: '#0f1111',            // Use the black color variable
      fontSize: '0.813rem',          // Font size from CSS variable
      textTransform: 'capitalize',      // Capitalize text
      marginBottom: '3px',              // Margin bottom

      // Browser-specific prefixes
      WebkitWidth: 'max-content',       // WebKit max-content width
      MozWidth: 'max-content',
    },

    // Featured Product
    productFeatured: {
      marginBottom: '30px',

      showCaseWrapper: {
        display: 'flex',                          // Flexbox display for all browsers
        alignItems: 'center',                     // Center items vertically
        gap: '20px',                              // Space between flex items
        overflowX: 'auto',                        // Horizontal overflow
        overscrollBehaviorX: 'contain',           // Control overscroll behavior
        scrollSnapType: 'inline mandatory',       // Snap items inline during scroll

        // Browser-specific prefixes
        WebkitAlignItems: 'center',               // WebKit-specific flexbox alignment
        msFlexAlign: 'center',                    // Microsoft-specific flexbox alignment
        WebkitScrollSnapType: 'inline mandatory', // WebKit-specific scroll snap
        msScrollSnapType: 'inline mandatory',
      },

      showCaseContainer: {
        minWidth: '100%',                          // Full-width container
        padding: '30px',                           // Padding
        border: '1px solid var(--cultured)',        // Border with cultured color
        borderRadius: 'var(--border-radius-md)',    // Border radius from variable
        scrollSnapAlign: 'start',                  // Scroll snapping alignment

        // Browser-specific prefixes for border radius
        WebkitBorderRadius: 'var(--border-radius-md)', // WebKit-specific border radius
      },

      showcase: {
        display: ['', '', 'flex'],                           // Flexbox display
        justifyContent: ['', '', 'center'],                  // Center the content horizontally
        alignItems: ['', '', 'center'],                      // Center the content vertically
        gap: ['', '', '20px'],                               // 20px gap between items

        // Browser-specific prefixes for flexbox
        WebkitBoxPack: 'center',                   // WebKit flexbox justify-content
        WebkitJustifyContent: 'center',            // WebKit-specific justify-content
        msFlexPack: 'center',                      // IE/Edge flexbox justify-content
        WebkitBoxAlign: 'center',                  // WebKit flexbox align-items
        WebkitAlignItems: 'center',                // WebKit-specific align-items
        msFlexAlign: 'center',                     // IE/Edge flexbox align-items
      },

      showCaseBanner: {
        minWidth: ['', '', '', '', 'calc(50% - 10px)']
      },
      showCaseImage: {
        maxWidth: ['', '450px', 'fit-content'],
        margin: ['', 'auto'],
        width: "100%",
        height: "400px",
        objectFit: "cover",
      },

      showCaseContent: {
        marginTop: ['30px', '0'],
        minWidth: ['', 'calc(100% - 345px)', 'calc(50% - 10px)']
      },

      showCaseRating: {
        display: 'flex',                // Using standard `flex` display
        alignItems: 'center',          // Align items vertically to the center
        color: '#ffa41c',  // Ensure this variable is defined in your theme or use a fixed color
        fontSize: '13px',              // Fixed font size
        padding: '4px 0',
      },
      showcaseTitle: {
        fontSize: '0.874rem',               // Font size
        color: '#232f3E',           // Text color
        overflow: 'hidden',                    // Hide overflow
        whiteSpace: 'nowrap',                  // Prevent line wrapping
        textOverflow: 'ellipsis',              // Display ellipsis when text overflows
        OTextOverflow: 'ellipsis',             // Opera prefix for text-overflow
        textTransform: 'uppercase',            // Uppercase text
        marginBottom: '3px',                   // Space below the title
      },

      showcaseDesc: {
        color: '#0f1111',              // Text color
        fontSize: '0.875rem',            // Font size from custom variables
        fontWeight: '300',    // Font weight from custom variables
        marginBottom: '10px',               // Space below the description
      },

      priceBox: {
        fontSize: '1.25rem',         // Custom font size variable
        display: 'flex',                 // Flexbox display
        gap: '10px',                     // Space between flex items
        marginBottom: '10px',            // Margin below the price box
        WebkitBoxAlign: 'center',        // Optional: alignment for older Safari versions
        msFlexAlign: 'center',           // Optional: alignment for IE11
        alignItems: 'center',
      },
      price: {
        color: '#cc0c39',
        fontWeight: '700',
      },
      del: {
        color: '#565659',
        fontWeight: '300',
      },

      addCartBtn: {
        backgroundColor: '#cc0c39',             // Background color
        padding: '8px 15px',                       // Padding around the button
        color: '#fff',                     // Text color
        // fontSize: '0.75rem',                   // Custom font size variable
        fontWeight: '700',           // Font weight
        textTransform: 'uppercase',                // Uppercase text
        borderRadius: '10px',   // Border radius for rounded corners
        marginBottom: '15px',                      // Margin below the button
        transition: '0.2s ease',    // Smooth transition for interactive effects
      },
      showCaseStatus: {
        marginBottom: '15px'
      },
      wrapper: {
        display: 'flex',
        justifyContent: 'space-between',    // Justify content with space between
        alignItems: 'center',               // Align items to center
        color: '#232F3E',        // Text color
        fontSize: '0.75rem',            // Font size from custom variable
        fontWeight: '400',    // Font weight from custom variable
        textTransform: 'uppercase',         // Uppercase text transformation
        marginBottom: '10px',               // Bottom margin of 10px
      },

      showcaseStatusBar: {
        background: '#ededed',      // Background color from custom variable
        position: 'relative',               // Relative positioning
        height: '10px',                     // Height of 10px
        borderRadius: '5px',
        '::before': {
          position: 'absolute',
          content: "''",  // Empty content for the pseudo-element
          top: '3px',
          left: '3px',
          height: '4px',
          width: '40%',
          background: '#cc0c39',
          borderRadius: '4px',  // Including border-radius
        },            // Border radius of 5px (including webkit prefix)
      },

      countDownBox: {
        countdownDesc: {
          color: '#232F3E',
          fontSize: '0.75rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          marginBottom: '10px',
        },

        countDown: {
          display: 'flex',
          gap: ['5px', '20px']
        },

        countdownContent: {
          padding: ['5px', '', '', '', '5px 10px'],
          background: '#ededed',
          borderRadius: '10px',
          textAlign: 'center',
        },

        displayText: {
          color: '#0f1111',
          fontSize: '0.62rem',
        },
      }

    }
  },
}