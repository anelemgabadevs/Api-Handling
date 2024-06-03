/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		// screens: {
		//     'xs': '320px',
		//     'mobile': '320px',
		//     'sm': '480px',
		//     'small': '480px',
		//     'md': '768px',
		//     'tablet': '768px',
		//     'lg': '1024px',
		//     'medium': '1024px',
		//     'xl': '1366px',
		//     'laptop': '1366px',
		//     '2xl': '1920px',
		//     'desktop': '1920px'
		// },
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)'],
				acumin: 'acumin-pro, sans-serif',
			},
			colors: {
				mwgray: {
					100: '#f9f9f9',
					200: '#f2f2f2',
					300: '#f1f1f2',
					400: '#bfbfbf',
					700: '#646464',
					800: '#252423',
				},
				white: '#ffffff',
				mwPrimary: {
					25: '#F4F7F9',
					50: '#E9EFF2',
					100: '#D3DFE5',
					200: '#BECED8',
					500: '#7C9EB2',
					800: '#3B6D8B',
					900: '#255D7E',
				},
				mwGrey: {
					300: '#D0D5DD',
					400: '#98A2B3',
					600: '#475467',
					900: '#101828',
				},
				mwYellow: {
					900: '#F2EB5F',
				},
				mwError: {
					50: '#FEF3F2',
					500: '#F04438',
				},
				mwSuccess: {
					50: '#ECFDF3',
					500: '#12B76A',
				},
				mwLightTeal: {
					100: '#D3DFE5',
					200: '#C8ECE9',
					500: '#95D0CF',
					900: '#4FB1AF',
				},
				mwBlueGrey: {
					25: '#F4F5F9',
					50: '#E8EBF3',
					100: '#D2D8E7',
				},
				mwOrange: {
					700: '#ef9d52',
					900: '#DB802D'
				},
				mwTealGradientFromLeft: '#398595',
				mwTealGradientToRight: '#4FB1AF',
			},
			fontSize: {
				mwxxs: '10px',
				mwxs: '12px',
				mwsm: '14px',
				mwbase: '16px',
				mwmd: '18px',
				mwml: '20px',
				mwlg: '24px',
				mwxl: '25px',
				mw2xl: '32px',
				mw4xl: '40px',
				mw5xl: '48px',
				mw6xl: '52px',
				mwTextDeskDisplayLg: [
					'64px',
					{
						fontWeight: 900,
						lineHeight: '76.8px',
					},
				],
				mwTextDeskDisplaySm: [
					'54px',
					{
						fontWeight: 900,
						lineHeight: '64.8px',
					},
				],
				mwTextDeskH1Bold: [
					'48px',
					{
						fontWeight: 900,
						lineHeight: '57.6px',
					},
				],
				mwTextDeskH2Bold: [
					'40px',
					{
						fontWeight: 900,
						lineHeight: '48px',
					},
				],
				mwTextDeskH3Bold: [
					'32px',
					{
						fontWeight: 900,
						lineHeight: '38.4px',
					},
				],
				mwTextDeskH3Semi: [
					'32px',
					{
						fontWeight: 600,
						lineHeight: '38.4px',
					},
				],
				mwTextDeskH4Bold: [
					'28px',
					{
						fontWeight: 900,
						lineHeight: '33.6px',
					},
				],
				mwTextDeskH4Semi: [
					'28px',
					{
						fontWeight: 600,
						lineHeight: '33.6px',
					},
				],
				mwTextDeskH5: [
					'24px',
					{
						fontWeight: 400,
						lineHeight: '28.8px',
					},
				],
				mwTextDeskH5Semi: [
					'24px',
					{
						fontWeight: 600,
						lineHeight: '28.8px',
					},
				],
				mwTextDeskH6: [
					'20px',
					{
						fontWeight: 400,
						lineHeight: '24px',
					},
				],
				mwTextDeskH6Semi: [
					'20px',
					{
						fontWeight: 600,
						lineHeight: '24px',
					},
				],
				mwTextMobileDisplayLg: [
					'48px',
					{
						fontWeight: 900,
						lineHeight: '57.6px',
					},
				],
				mwTextMobileDisplaySm: [
					'40px',
					{
						fontWeight: 900,
						lineHeight: '48px',
					},
				],
				mwTextMobileH1Bold: [
					'36px',
					{
						fontWeight: 900,
						lineHeight: '43.2px',
					},
				],
				mwTextMobileH2Bold: [
					'32px',
					{
						fontWeight: 900,
						lineHeight: '38.4px',
					},
				],
				mwTextMobileH3Bold: [
					'28px',
					{
						fontWeight: 900,
						lineHeight: '33.6px',
					},
				],
				mwTextMobileH3Semi: [
					'28px',
					{
						fontWeight: 600,
						lineHeight: '33.6px',
					},
				],
				mwTextMobileH4Bold: [
					'24px',
					{
						fontWeight: 900,
						lineHeight: '28.8px',
					},
				],
				mwTextMobileH4Semi: [
					'24px',
					{
						fontWeight: 600,
						lineHeight: '28.8px',
					},
				],
				mwTextMobileH5: [
					'20px',
					{
						fontWeight: 400,
						lineHeight: '32px',
					},
				],
				mwTextMobileH5Semi: [
					'20px',
					{
						fontWeight: 600,
						lineHeight: '32px',
					},
				],
				mwTextMobileH6: [
					'18px',
					{
						fontWeight: 400,
						lineHeight: '28.8px',
					},
				],
				mwTextMobileH6Semi: [
					'18px',
					{
						fontWeight: 600,
						lineHeight: '28.8px',
					},
				],
				mwTextParaXLarge: [
					'20px',
					{
						fontWeight: 400,
						lineHeight: '32px',
					},
				],
				mwTextParaXLargeSemi: [
					'20px',
					{
						fontWeight: 600,
						lineHeight: '32px',
					},
				],
				mwTextParaLarge: [
					'18px',
					{
						fontWeight: 400,
						lineHeight: '28.8px',
					},
				],
				mwTextParaLargeSemi: [
					'18px',
					{
						fontWeight: 600,
						lineHeight: '28.8px',
					},
				],
				mwTextParaBase: [
					'16px',
					{
						fontWeight: 400,
						lineHeight: '25.6px',
					},
				],
				mwTextParaBaseSemi: [
					'16px',
					{
						fontWeight: 600,
						lineHeight: '25.6px',
					},
				],
				mwTextParaSmall: [
					'14px',
					{
						fontWeight: 400,
						lineHeight: '22.4px',
					},
				],
				mwTextParaSmallSemi: [
					'14px',
					{
						fontWeight: 600,
						lineHeight: '22.4px',
					},
				],
				mwTextParaXSmall: [
					'12px',
					{
						fontWeight: 400,
						lineHeight: '19.2px',
					},
				],
				mwTextParaXSmallSemi: [
					'12px',
					{
						fontWeight: 600,
						lineHeight: '19.2px',
					},
				],
				mwTextLinkLarge: [
					'20px',
					{
						fontWeight: 600,
						lineHeight: '32px',
					},
				],
				mwTextLinkBase: [
					'16px',
					{
						fontWeight: 600,
						lineHeight: '25.6px',
					},
				],
				mwTextLinkSmall: [
					'14px',
					{
						fontWeight: 600,
						lineHeight: '22.4px',
					},
				],
				mwTextLinkXSmall: [
					'12px',
					{
						fontWeight: 600,
						lineHeight: '19.2px',
					},
				],
				mwButtonTextLarge: [
					'20px',
					{
						fontWeight: 600,
						lineHeight: '24px',
					},
				],
				mwButtonTextMedium: [
					'16px',
					{
						fontWeight: 600,
						lineHeight: '20px',
					},
				],
				mwButtonTextSmall: [
					'14px',
					{
						fontWeight: 600,
						lineHeight: '16.1px',
					},
				],
				mwCaptionLarge: [
					'14px',
					{
						fontWeight: 600,
						lineHeight: '16.8px',
					},
				],
				mwCaptionMedium: [
					'12px',
					{
						fontWeight: 600,
						lineHeight: '14.4px',
					},
				],
				mwCaptionSmall: [
					'10px',
					{
						fontWeight: 600,
						lineHeight: '12px',
					},
				],
				mwCaptionXSmall: [
					'8px',
					{
						fontWeight: 600,
						lineHeight: '9.6px',
					},
				],
			},
			screens: {
				desktop: '1336px',
			},
			letterSpacing: {
				tight: '-0.01em',
			},
			zIndex: {
				60: '60',
				70: '70',
				80: '80',
				90: '90',
				100: '100',
			},
			dropShadow: {
				tillslip: '0px 2px 15px rgba(11, 14, 26, 0.1)',
			},

			boxShadow: {
				search: '0px 0px 4px #C8ECE9',
			},
			aspectRatio: {
				map: '129 / 118',
			},
		},
	},
	plugins: [],
};
