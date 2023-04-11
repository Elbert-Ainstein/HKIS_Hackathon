/** @type {import('tailwindcss').Config} */
module.exports = {

    content: [ './components/**/*.{html,js}',
    '*.{html,js}',
  ]
  
    ,
  darkMode: 'class',
  theme: {
 
      
      container: {
        // you can configure the container to be centered
      center: true,
        padding:"1rem",
        // or have default horizontal padding
        
  
        // default breakpoints but with 40px removed
        screens: {
          sm: "100%",
          md: "100%",
          lg: "992px",
          xl: "1280px"
       }
     
  
    },
    extend: {
      backgroundImage: {
        'footer': "url('/images/footer.png')",
        'homeBg-dark': "url('/images/background/bg-dark.jpg')",
        'homeTwoBg-dark': "url('/images/background/bgtwo.jpg')",
        'previewBg': "url('/images/background/previewbg.png')",
        'preview': "url('/images/background/download 1.png')",
        'close-light': "url('/images/icons/closelight.jpg')",
        'close-dark': "url('/images/icons/closeDark.png')",
       
      },
      colors: {
        'hovercolor': '#FF834F',
        'green': '#94B95A',
        'green-lite': '#80B4FF',
      },
      boxShadow: {
        'box': '-5px 14px 32px rgba(0, 0, 0, 0.06)',
        'icon': '-2px 9px 24px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}