/** @type {import('tailwindcss').Config} */
export default {
  content: [
        './index.html',
        './src/*components/*.{js,jsx}',
        './src/*.{js,jsx}'
    ],
  theme: {
    extend: {
        textColor: {
            skin: {
                //  Light theme
                primaryLight:       'var(--color-text-primaryLight)',
                secondaryLight:     'var(--color-text-secondaryLight)',
                thirdLight:         'var(--color-text-thirdLight)',

                //  Dark theme
                primaryDark:        'var(--color-text-primaryDark)',
                secondaryDark:      'var(--color-text-secondaryDark)',
                thirdDark:          'var(--color-text-thirdDark)'
            },
        },
        backgroundColor: {
            skin: {
                //  Light theme
                primaryLight:       'var(--color-bg-primaryLight)',
                secondaryLight:     'var(--color-bg-secondaryLight)',
                thirdLight:         'var(--color-bg-thirdLight)',

                //  Dark theme
                primaryDark:        'var(--color-bg-primaryDark)',
                secondaryDark:      'var(--color-bg-secondaryDark)',
                thirdDark:          'var(--color-bg-thirdDark)'
            }
        },
        fontFamily: {
            title: ["Roboto", "sans-serif"],
        }
    },
  },
  plugins: [],
}

