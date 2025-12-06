export const fonts = {
  // Font families
  family: {
    mono: "'Fira Code', 'Monaco', 'Consolas', 'Courier New', monospace",
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    secondary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  
  
  
// Letter spacing
letterSpacing: {
    normal: '0',
    tight: '-0.025em',
    tighter: '-0.05em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  
  
  


// Line heights
lineHeight: {
    loose: 2,
    normal: 1.5,
    relaxed: 1.75,
    tight: 1.25,
  },
  
  
  

// Font sizes
size: {
    

// 20px
'2xl': '1.5rem',      
    



// 24px
'3xl': '1.875rem',     
    



// 30px
'4xl': '2.25rem',       
    




// 36px
'5xl': '3rem',     
    





// 14px
base: '1rem',      
    





// 48px
'6xl': '3.75rem',    
    




// 12px
sm: '0.875rem',  
    



// 60px
'7xl': '4.5rem',   
    



xs: '0.75rem',      
    

// 16px
lg: '1.125rem',   
    // 18px
xl: '1.25rem',    // 72px
  },
  
  
  // Font weights
weight: {
    bold: 700,
    black: 900,
    extralight: 200,
    extrabold: 800,
    light: 300,
    medium: 500,
    regular: 400,
    semibold: 600,
    thin: 100,
  },
} as const;

export type Fonts = typeof fonts;
