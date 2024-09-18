
function Icons({name, ...props}) {

	let icon
	switch (name) {
		case "logo":
			icon = (
				<svg width="26" height="28" viewBox="0 0 26 28" xmlns="http://www.w3.org/2000/svg" {...props}>
					<path d="M10.2133 8.01331L8.61333 5.34665C8.36 4.91998 8.36 4.39998 8.61333 3.97331L10.2133 1.30665C10.4533 0.906647 10.8933 0.666647 11.36 0.666647H14.6267C14.8583 0.665352 15.0862 0.725044 15.2875 0.839725C15.4888 0.954406 15.6563 1.12004 15.7733 1.31998L17.3733 3.98665C17.6267 4.41331 17.6267 4.93331 17.3733 5.35998L15.7733 8.02665C15.5467 8.42665 15.1067 8.66665 14.64 8.66665H11.3733C10.8933 8.66665 10.4533 8.42665 10.2133 8.01331ZM15.7867 10.6533L17.3867 13.32C17.64 13.7466 17.64 14.2666 17.3867 14.6933L15.7867 17.36C15.5467 17.76 15.1067 18.0133 14.64 18.0133H11.36C10.8933 18.0133 10.4533 17.7733 10.2133 17.36L8.61333 14.6933C8.36 14.2666 8.36 13.7466 8.61333 13.32L10.2133 10.6533C10.3303 10.4534 10.4979 10.2877 10.6992 10.1731C10.9004 10.0584 11.1283 9.99869 11.36 9.99998H14.64C14.8717 9.99869 15.0996 10.0584 15.3008 10.1731C15.5021 10.2877 15.6697 10.4534 15.7867 10.6533ZM6.32 13.3466H3.05333C2.58667 13.3466 2.14667 13.1066 1.90667 12.6933L0.306665 10.0266C0.0533314 9.59998 0.0533314 9.07998 0.306665 8.65331L1.90667 5.98665C2.14667 5.58665 2.58667 5.33331 3.05333 5.33331H6.32C6.55165 5.33202 6.77957 5.39171 6.98084 5.50639C7.18212 5.62107 7.34967 5.7867 7.46667 5.98665L9.06667 8.65331C9.32 9.07998 9.32 9.59998 9.06667 10.0266L7.46667 12.6933C7.21334 13.1066 6.78667 13.3466 6.32 13.3466ZM3.04 14.68H6.32C6.55165 14.6787 6.77957 14.7384 6.98084 14.8531C7.18212 14.9677 7.34967 15.1334 7.46667 15.3333L9.06667 18C9.32 18.4266 9.32 18.9466 9.06667 19.3733L7.46667 22.04C7.22667 22.44 6.78667 22.6933 6.32 22.6933H3.04C2.57333 22.6933 2.13333 22.4533 1.89333 22.04L0.293331 19.3733C0.039999 18.9466 0.039999 18.4266 0.293331 18L1.89333 15.3333C2.13333 14.9333 2.57333 14.68 3.04 14.68ZM18.5467 12.7066L16.9467 10.04C16.6933 9.61331 16.6933 9.09331 16.9467 8.66665L18.5467 5.99998C18.7867 5.59998 19.2133 5.34665 19.68 5.34665H22.96C23.4267 5.34665 23.8667 5.59998 24.1067 5.99998L25.7067 8.66665C25.96 9.09331 25.96 9.61331 25.7067 10.04L24.1067 12.7066C23.8667 13.1066 23.4267 13.36 22.96 13.36H19.6933C19.2133 13.3466 18.7867 13.1066 18.5467 12.7066ZM19.68 14.68H22.96C23.1917 14.6787 23.4196 14.7384 23.6208 14.8531C23.8221 14.9677 23.9897 15.1334 24.1067 15.3333L25.7067 18C25.96 18.4266 25.96 18.9466 25.7067 19.3733L24.1067 22.04C23.8667 22.44 23.4267 22.6933 22.96 22.6933H19.68C19.2133 22.6933 18.7733 22.4533 18.5333 22.04L16.9333 19.3733C16.68 18.9466 16.68 18.4266 16.9333 18L18.5333 15.3333C18.7867 14.9333 19.2133 14.68 19.68 14.68ZM15.7867 19.9866L17.3867 22.6533C17.64 23.08 17.64 23.6 17.3867 24.0266L15.7867 26.6933C15.5467 27.0933 15.1067 27.3466 14.64 27.3466H11.36C10.8933 27.3466 10.4533 27.1066 10.2133 26.6933L8.61333 24.0266C8.36 23.6 8.36 23.08 8.61333 22.6533L10.2133 19.9866C10.4533 19.5866 10.8933 19.3333 11.36 19.3333H14.64C14.8717 19.332 15.0996 19.3917 15.3008 19.5064C15.5021 19.6211 15.6697 19.7867 15.7867 19.9866Z"/>
				</svg>
			)
			break
		case "ds":
			icon = (
				<svg width="29" height="22" viewBox="0 0 29 22" xmlns="http://www.w3.org/2000/svg" {...props}>
					<path d="M24.0215 2.06278C22.2481 1.23229 20.3281 0.629519 18.328 0.28125C18.2928 0.281753 18.2593 0.296197 18.2347 0.321435C17.9947 0.763469 17.7147 1.33945 17.528 1.78149C15.4066 1.46021 13.2492 1.46021 11.1278 1.78149C10.9411 1.32606 10.6611 0.763469 10.4078 0.321435C10.3945 0.294645 10.3544 0.28125 10.3144 0.28125C8.31439 0.629519 6.40767 1.23229 4.62096 2.06278C4.60763 2.06278 4.59429 2.07618 4.58096 2.08957C0.954192 7.54132 -0.0458354 12.8457 0.447511 18.0966C0.447511 18.1233 0.460845 18.1501 0.487512 18.1635C2.88758 19.9317 5.19431 21.0033 7.47437 21.7132C7.51437 21.7266 7.55437 21.7132 7.56771 21.6864C8.10105 20.9497 8.58107 20.1728 8.99441 19.3557C9.02108 19.3021 8.99441 19.2485 8.94108 19.2351C8.18106 18.9404 7.46104 18.5922 6.75435 18.1903C6.70102 18.1635 6.70102 18.0832 6.74102 18.043C6.88769 17.9358 7.03436 17.8153 7.18103 17.7081C7.2077 17.6813 7.2477 17.6813 7.27437 17.6947C11.8612 19.7977 16.808 19.7977 21.3414 17.6947C21.3681 17.6813 21.4081 17.6813 21.4348 17.7081C21.5814 17.8287 21.7281 17.9358 21.8748 18.0564C21.9281 18.0966 21.9281 18.1769 21.8614 18.2037C21.1681 18.619 20.4347 18.9538 19.6747 19.2485C19.6214 19.2619 19.608 19.3289 19.6214 19.3691C20.048 20.1862 20.5281 20.9631 21.0481 21.6998C21.0881 21.7132 21.1281 21.7266 21.1681 21.7132C23.4615 21.0033 25.7682 19.9317 28.1683 18.1635C28.1949 18.1501 28.2083 18.1233 28.2083 18.0966C28.795 12.0286 27.2349 6.76442 24.0748 2.08957C24.0615 2.07618 24.0482 2.06278 24.0215 2.06278ZM9.68777 14.8952C8.31439 14.8952 7.1677 13.6226 7.1677 12.0554C7.1677 10.4882 8.28773 9.21569 9.68777 9.21569C11.1011 9.21569 12.2212 10.5016 12.2078 12.0554C12.2078 13.6226 11.0878 14.8952 9.68777 14.8952ZM18.9814 14.8952C17.608 14.8952 16.4613 13.6226 16.4613 12.0554C16.4613 10.4882 17.5813 9.21569 18.9814 9.21569C20.3947 9.21569 21.5148 10.5016 21.5014 12.0554C21.5014 13.6226 20.3947 14.8952 18.9814 14.8952Z"/>
				</svg>
			)
			break
		case "tg":
			icon = (
				<svg width="29" height="24" viewBox="0 0 29 24" xmlns="http://www.w3.org/2000/svg" {...props}>
					<path d="M25.9437 0.211897C25.9437 0.211897 28.5338 -0.826956 28.3171 1.69578C28.2457 2.73463 27.5984 6.37096 27.0944 10.3035L25.3677 21.9537C25.3677 21.9537 25.2237 23.6605 23.9284 23.9574C22.6337 24.2536 20.691 22.9185 20.331 22.6216C20.043 22.3988 14.935 19.0594 13.1363 17.4274C12.6323 16.9817 12.0563 16.0916 13.2083 15.0527L20.763 7.63198C21.6264 6.74055 22.4897 4.66285 18.8923 7.18627L8.8189 14.2354C8.8189 14.2354 7.66755 14.978 5.50953 14.3101L0.832157 12.8256C0.832157 12.8256 -0.894526 11.7126 2.0555 10.5997C9.2509 7.11221 18.101 3.55063 25.9431 0.211211"/>
				</svg>
			)
			break
		case "gh":
			icon = (
				<svg width="27" height="26" viewBox="0 0 27 26" xmlns="http://www.w3.org/2000/svg" {...props}>
					<path d="M13.665 0.474915C11.9138 0.474915 10.1797 0.806929 8.56187 1.452C6.944 2.09708 5.47396 3.04257 4.23569 4.23451C1.73489 6.64175 0.329956 9.90665 0.329956 13.311C0.329956 18.9845 4.1571 23.7981 9.4511 25.5053C10.1178 25.6079 10.3312 25.21 10.3312 24.8635V22.6942C6.63741 23.4643 5.85065 20.9741 5.85065 20.9741C5.23724 19.4851 4.37046 19.0872 4.37046 19.0872C3.15698 18.2914 4.46381 18.3171 4.46381 18.3171C5.79731 18.4069 6.50406 19.6392 6.50406 19.6392C7.66421 21.5903 9.62445 21.0126 10.3845 20.7046C10.5046 19.8702 10.8513 19.3054 11.2247 18.9845C8.26428 18.6636 5.15723 17.5597 5.15723 12.6692C5.15723 11.2444 5.66396 10.102 6.53073 9.19061C6.39738 8.86971 5.93066 7.53476 6.66408 5.80189C6.66408 5.80189 7.78422 5.45531 10.3312 7.11117C11.3847 6.82877 12.5315 6.68757 13.665 6.68757C14.7984 6.68757 15.9452 6.82877 16.9987 7.11117C19.5457 5.45531 20.6658 5.80189 20.6658 5.80189C21.3993 7.53476 20.9325 8.86971 20.7992 9.19061C21.666 10.102 22.1727 11.2444 22.1727 12.6692C22.1727 17.5726 19.0523 18.6508 16.0786 18.9717C16.5587 19.3696 16.9987 20.1526 16.9987 21.3464V24.8635C16.9987 25.21 17.2121 25.6208 17.8922 25.5053C23.1861 23.7852 27 18.9845 27 13.311C27 11.6253 26.655 9.95618 25.9849 8.39884C25.3147 6.84149 24.3325 5.42645 23.0942 4.23451C21.856 3.04257 20.3859 2.09708 18.768 1.452C17.1502 0.806929 15.4161 0.474915 13.665 0.474915Z"/>
				</svg>
			)
			break
		case "py":
			icon = (
				<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11.1876 0.135L11.8626 0.285L12.4101 0.48L12.8526 0.705L13.1901 0.945L13.4451 1.2L13.6326 1.455L13.7526 1.7025L13.8276 1.9275L13.8576 2.1225L13.8726 2.2725L13.8651 2.37V6.375L13.8276 6.8475L13.7301 7.26L13.5726 7.605L13.3776 7.89L13.1526 8.1225L12.9051 8.31L12.6426 8.4525L12.3801 8.5575L12.1326 8.6325L11.9076 8.685L11.7126 8.715L11.5551 8.73H7.07758L6.56008 8.7675L6.11758 8.8725L5.74258 9.0375L5.43508 9.24L5.18758 9.48L4.98508 9.7425L4.83508 10.0125L4.72258 10.29L4.64758 10.5525L4.59508 10.7925L4.56508 10.995L4.55008 11.1525V13.4475H2.87758L2.72008 13.425L2.51008 13.3725L2.27008 13.2825L2.00758 13.1475L1.73758 12.9525L1.46758 12.6825L1.20508 12.3375L0.965078 11.895L0.755078 11.3475L0.597578 10.6875L0.492578 9.9L0.455078 8.9775L0.500078 8.0625L0.620078 7.2825L0.800078 6.63L1.04008 6.0975L1.31008 5.67L1.61008 5.34L1.92508 5.0925L2.24008 4.9125L2.54008 4.7925L2.81008 4.7175L3.05008 4.68L3.23008 4.6725H3.35008L3.39508 4.68H9.51508V4.0575H5.13508L5.12758 1.995L5.11258 1.7175L5.15008 1.4625L5.23258 1.23L5.36008 1.02L5.54758 0.825L5.78008 0.6525L6.06508 0.5025L6.39508 0.3675L6.77758 0.255L7.21258 0.165L7.69258 0.09L8.22508 0.045L8.80258 0.015L9.43258 0L10.3851 0.0375L11.1876 0.135ZM6.46258 1.62L6.29008 1.8675L6.23008 2.175L6.29008 2.4825L6.46258 2.7375L6.71008 2.9025L7.01758 2.97L7.32508 2.9025L7.57258 2.7375L7.74508 2.4825L7.80508 2.175L7.74508 1.8675L7.57258 1.62L7.32508 1.455L7.01758 1.3875L6.71008 1.455L6.46258 1.62ZM16.2801 4.5825L16.4901 4.6275L16.7301 4.7175L16.9926 4.8525L17.2626 5.055L17.5326 5.3175L17.7951 5.67L18.0351 6.1125L18.2451 6.66L18.4026 7.32L18.5076 8.1L18.5451 9.0225L18.5001 9.945L18.3801 10.725L18.2001 11.37L17.9601 11.9025L17.6901 12.33L17.3901 12.6675L17.0751 12.915L16.7601 13.095L16.4601 13.215L16.1901 13.2825L15.9501 13.32L15.7701 13.335L15.6501 13.3275H9.48508V13.9425H13.8651L13.8726 16.0125L13.8876 16.2825L13.8501 16.5375L13.7676 16.77L13.6401 16.9875L13.4526 17.175L13.2201 17.355L12.9351 17.505L12.6051 17.6325L12.2226 17.745L11.7876 17.8425L11.3076 17.91L10.7751 17.9625L10.1976 17.9925L9.56758 18L8.61508 17.97L7.81258 17.865L7.13758 17.715L6.59008 17.5275L6.14758 17.3025L5.81008 17.055L5.55508 16.8L5.36758 16.545L5.24758 16.2975L5.17258 16.0725L5.14258 15.885L5.12758 15.735L5.13508 15.6375V11.6325L5.17258 11.1525L5.27008 10.7475L5.42758 10.4025L5.62258 10.1175L5.84758 9.8775L6.09508 9.6975L6.35758 9.5475L6.62008 9.4425L6.86758 9.3675L7.09258 9.3225L7.28758 9.2925L7.44508 9.2775L7.54258 9.27H11.9226L12.4401 9.2325L12.8826 9.1275L13.2576 8.97L13.5651 8.76L13.8126 8.52L14.0151 8.2575L14.1651 7.9875L14.2776 7.7175L14.3526 7.455L14.4051 7.215L14.4351 7.005L14.4501 6.8475V4.5525H16.0176L16.1226 4.56L16.2801 4.5825ZM11.4276 15.27L11.2551 15.5175L11.1951 15.825L11.2551 16.1325L11.4276 16.38L11.6751 16.5525L11.9826 16.6125L12.2901 16.5525L12.5376 16.38L12.7101 16.1325L12.7701 15.825L12.7101 15.5175L12.5376 15.27L12.2901 15.0975L11.9826 15.0375L11.6751 15.0975L11.4276 15.27Z" fill="white" fillOpacity="0.5"/>
				</svg>
			)
			break
		case "lua":
			icon = (
				<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.784773 7.78275L0.580773 7.755C0.544773 8.013 0.519273 8.27625 0.505023 8.53575L0.711273 8.54775C0.724773 8.29175 0.749273 8.03675 0.784773 7.78275ZM3.60177 2.46675L3.46377 2.313C3.27027 2.487 3.08202 2.673 2.90427 2.8635L3.05577 3.0045C3.22902 2.8185 3.41277 2.637 3.60177 2.46675ZM4.82652 1.54425L4.71702 1.368C4.49402 1.508 4.27827 1.6565 4.06977 1.8135L4.19427 1.97775C4.39677 1.8255 4.60977 1.6785 4.82652 1.54425ZM1.86777 13.7767C2.00677 14.0002 2.15502 14.216 2.31252 14.424L2.47752 14.301C2.32358 14.0963 2.17845 13.8851 2.04252 13.668L1.86777 13.7767ZM1.34502 12.3015L1.15377 12.3795C1.25127 12.619 1.35902 12.8547 1.47702 13.0868L1.48077 13.0942L1.66452 13.0005L1.66077 12.993C1.54583 12.767 1.44049 12.5363 1.34502 12.3015ZM0.723273 6.98175L0.925023 7.029C0.982023 6.78 1.05102 6.531 1.12902 6.2895L0.933273 6.22425C0.852273 6.47325 0.781773 6.72825 0.723273 6.98175ZM0.705273 9.315L0.499023 9.3225C0.508023 9.5835 0.529023 9.84675 0.561273 10.1047L0.766023 10.08C0.734523 9.828 0.714273 9.57 0.705273 9.315ZM0.691773 10.8795C0.746523 11.1345 0.813273 11.391 0.889773 11.64L1.08702 11.58C1.01202 11.335 0.947523 11.0875 0.893523 10.8375L0.691773 10.8795ZM9.17952 0.20625L9.17202 0C8.91102 0.009 8.64777 0.02925 8.38902 0.0615L8.41452 0.26625C8.66852 0.23525 8.92352 0.21525 9.17952 0.20625ZM17.9155 6.4245C17.9905 6.669 18.055 6.9195 18.1075 7.1685L18.31 7.12425C18.256 6.86925 18.19 6.61275 18.1135 6.36375L17.9155 6.4245ZM13.7155 1.04175C13.4838 0.91921 13.2468 0.806853 13.0053 0.705L12.925 0.894C13.1615 0.994 13.393 1.10375 13.6195 1.22325L13.7155 1.04175ZM12.2695 0.429C12.02 0.3495 11.7675 0.28025 11.512 0.22125L11.4648 0.42225C11.7148 0.47975 11.9618 0.548 12.2058 0.627L12.2695 0.429ZM5.50527 1.15875C5.72977 1.04575 5.95877 0.94125 6.19227 0.84525L6.11427 0.65475C5.87527 0.75075 5.64102 0.85775 5.41152 0.97575L5.40027 0.98175L5.49402 1.16475L5.50527 1.15875ZM18.295 8.691L18.5013 8.6835C18.4922 8.42148 18.4717 8.15998 18.4398 7.89975L18.235 7.9245C18.2658 8.178 18.286 8.436 18.295 8.691ZM10.7403 0.07875C10.4803 0.04375 10.2195 0.01925 9.95802 0.00525L9.94752 0.21C10.2018 0.2235 10.4598 0.24825 10.7118 0.2835L10.7403 0.07875ZM7.65777 0.39525L7.61427 0.19275C7.35927 0.24675 7.10352 0.31275 6.85377 0.39075L6.91452 0.58725C7.15827 0.513 7.40877 0.4485 7.65777 0.39525ZM1.94052 4.10175L2.11377 4.21425C2.25252 4.0005 2.40177 3.78975 2.55777 3.58875L2.39502 3.46125C2.23452 3.66925 2.08302 3.88275 1.94052 4.10175ZM1.20702 5.4885L1.39677 5.56875C1.49577 5.334 1.60677 5.1 1.72602 4.87575L1.54377 4.77975C1.42152 5.01 1.30827 5.2485 1.20702 5.4885ZM14.167 16.4573L14.2758 16.6327C14.497 16.4932 14.7153 16.344 14.923 16.1873L14.8 16.023C14.596 16.176 14.3823 16.323 14.167 16.4573ZM16.4358 14.4142L16.5985 14.5417C16.7598 14.337 16.912 14.121 17.0538 13.9012L16.8813 13.7902C16.7413 14.0047 16.5928 14.2127 16.4358 14.4142ZM15.391 15.5363L15.529 15.6885C15.7225 15.516 15.9115 15.3293 16.0885 15.1395L15.9378 14.9985C15.7653 15.1845 15.58 15.3645 15.391 15.5363ZM17.269 13.128L17.452 13.2247C17.5735 12.9945 17.6875 12.756 17.7888 12.516L17.5983 12.4357C17.4993 12.6715 17.3894 12.9025 17.269 13.128ZM18.2125 10.2218L18.4173 10.251C18.4538 9.991 18.4793 9.73025 18.4938 9.46875L18.2875 9.45825C18.2744 9.71378 18.2493 9.96855 18.2125 10.2218ZM17.8668 11.7157L18.0648 11.7802C18.1453 11.5308 18.215 11.2782 18.274 11.0227L18.073 10.9755C18.0153 11.2253 17.9463 11.4742 17.8668 11.7157ZM17.3395 5.004C17.455 5.23125 17.5623 5.46675 17.6575 5.703L17.8495 5.625C17.751 5.3821 17.6419 5.14362 17.5225 4.91025L17.3395 5.004ZM6.72177 17.5635C6.97077 17.644 7.22302 17.7138 7.47852 17.7728L7.52502 17.5718C7.27572 17.514 7.029 17.4457 6.78552 17.367L6.72177 17.5635ZM8.25102 17.9167C8.50977 17.9535 8.77302 17.9782 9.03327 17.9932L9.04377 17.787C8.78809 17.7734 8.53311 17.7489 8.27952 17.7135L8.25102 17.9167ZM13.4943 16.8368C13.2663 16.9527 13.0348 17.0588 12.7998 17.1547L12.8778 17.3468C13.1163 17.2485 13.357 17.1405 13.588 17.0212L13.591 17.0198L13.4988 16.8353L13.4943 16.8368ZM3.95952 16.1003C4.16502 16.26 4.38102 16.4137 4.60002 16.554L4.71177 16.3815C4.49731 16.2424 4.28887 16.0943 4.08702 15.9375L3.95952 16.1003ZM9.81252 17.7938L9.81927 18C10.0813 17.9895 10.3427 17.9685 10.603 17.937L10.5768 17.7337C10.3248 17.7645 10.0668 17.7847 9.81252 17.7938ZM5.27727 16.953C5.50877 17.0755 5.74527 17.1877 5.98677 17.2897L6.06702 17.0993C5.83145 16.9994 5.60024 16.8896 5.37402 16.77L5.27727 16.953ZM2.81202 15.0308C2.98677 15.2242 3.17202 15.4133 3.36252 15.5903L3.50352 15.4395C3.31677 15.267 3.13602 15.0817 2.96577 14.8927L2.81202 15.0308ZM11.3335 17.6063L11.3778 17.8088C11.6341 17.7534 11.8878 17.6868 12.1383 17.6092L12.0768 17.4128C11.833 17.487 11.5825 17.5515 11.3335 17.6063ZM16.3848 0.09675C15.8499 0.09675 15.3369 0.309228 14.9587 0.687442C14.5805 1.06566 14.368 1.57862 14.368 2.1135C14.368 2.64838 14.5805 3.16134 14.9587 3.53956C15.3369 3.91777 15.8499 4.13025 16.3848 4.13025C16.9196 4.13025 17.4326 3.91777 17.8108 3.53956C18.189 3.16134 18.4015 2.64838 18.4015 2.1135C18.4015 1.57862 18.189 1.06566 17.8108 0.687442C17.4326 0.309228 16.9196 0.09675 16.3848 0.09675ZM11.9928 11.5852C11.9928 11.9385 12.2283 12.0802 12.6318 12.0802C13.1343 12.0802 13.6045 11.7832 13.6045 11.3182V10.8345C13.432 10.9148 13.3203 10.9402 12.7743 11.0145C12.223 11.0962 11.9928 11.244 11.9928 11.5852ZM9.49977 2.1135C7.67376 2.1135 5.92253 2.83888 4.63134 4.13007C3.34016 5.42126 2.61477 7.17248 2.61477 8.9985C2.61477 10.3602 3.01857 11.6914 3.7751 12.8236C4.53164 13.9558 5.60693 14.8383 6.865 15.3594C8.12307 15.8805 9.50741 16.0169 10.843 15.7512C12.1785 15.4855 13.4053 14.8298 14.3682 13.8669C15.3311 12.904 15.9868 11.6773 16.2525 10.3417C16.5181 9.00614 16.3818 7.62179 15.8607 6.36372C15.3396 5.10566 14.4571 4.03036 13.3249 3.27383C12.1926 2.5173 10.8615 2.1135 9.49977 2.1135ZM7.63452 12.441H4.82802V7.92375H5.40477V11.9333H7.63527L7.63452 12.441ZM10.732 12.441H10.2678V11.9385C9.96402 12.366 9.65952 12.5333 9.18327 12.5333C8.55102 12.5333 8.14827 12.186 8.14827 11.6468V9.1935H8.66277V11.4435C8.66277 11.8335 8.92302 12.081 9.33252 12.081C9.87177 12.081 10.2183 11.6475 10.2183 10.9853V9.1935H10.7328V12.441H10.732ZM10.3345 6.14625C10.3228 5.87424 10.3663 5.60267 10.4624 5.34792C10.5584 5.09316 10.7051 4.86048 10.8934 4.66389C11.0818 4.4673 11.308 4.31087 11.5584 4.20402C11.8088 4.09717 12.0783 4.04211 12.3505 4.04217C12.6228 4.04222 12.8922 4.09737 13.1426 4.20432C13.393 4.31126 13.6191 4.46777 13.8074 4.66443C13.9957 4.86109 14.1423 5.09383 14.2382 5.34862C14.3342 5.60341 14.3776 5.87499 14.3658 6.147C14.3433 6.66653 14.121 7.15731 13.7454 7.51693C13.3698 7.87656 12.8698 8.07726 12.3498 8.07717C11.8298 8.07707 11.3299 7.87618 10.9544 7.51641C10.5789 7.15665 10.3568 6.66579 10.3345 6.14625ZM14.5098 12.0382V12.4282C14.3425 12.4725 14.2623 12.4838 14.1565 12.4838C14.0323 12.4835 13.9119 12.4411 13.815 12.3634C13.7181 12.2857 13.6505 12.1774 13.6233 12.0563C13.4814 12.2066 13.3105 12.3265 13.1208 12.4086C12.9311 12.4908 12.7267 12.5334 12.52 12.534C11.8623 12.534 11.4535 12.1867 11.4535 11.598C11.4535 11.2028 11.6455 10.911 12.0235 10.7557C12.223 10.6755 12.334 10.65 13.0653 10.5577C13.474 10.5082 13.6045 10.4145 13.6045 10.1978V10.0612C13.6045 9.75225 13.3435 9.5775 12.8793 9.5775C12.3955 9.5775 12.1615 9.7575 12.1173 10.155H11.5975C11.6283 9.405 12.112 9.102 12.898 9.102C13.6975 9.102 14.1183 9.411 14.1183 9.9885V11.7975C14.1183 11.9587 14.218 12.051 14.398 12.051C14.4288 12.0495 14.4535 12.0495 14.5098 12.0382Z" fill="white" fillOpacity="0.5"/>
				</svg>
			)
			break
		case "custom":
			icon = (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.91664 18.475L7.85164 20.4817C7.31015 21.0232 6.57575 21.3274 5.80997 21.3274C5.0442 21.3274 4.30979 21.0232 3.76831 20.4817C3.22682 19.9402 2.92262 19.2058 2.92262 18.44C2.92262 17.6742 3.22682 16.9398 3.76831 16.3983L9.06497 11.09C9.58485 10.5684 10.2853 10.2667 11.0215 10.2471C11.7576 10.2276 12.4731 10.4918 13.02 10.985L13.16 11.1017C13.3812 11.3183 13.6794 11.4381 13.989 11.4348C14.2986 11.4315 14.5942 11.3054 14.8108 11.0842C15.0274 10.8629 15.1472 10.5647 15.144 10.2551C15.1407 9.94553 15.0145 9.64993 14.7933 9.43333C14.7271 9.34848 14.657 9.26673 14.5833 9.18833C13.5874 8.32187 12.2994 7.86632 10.9801 7.91398C9.66091 7.96164 8.40911 8.50893 7.4783 9.445L2.11164 14.7533C1.19972 15.7459 0.706529 17.0524 0.735059 18.4C0.763589 19.7476 1.31163 21.0321 2.26474 21.9852C3.21785 22.9383 4.50233 23.4864 5.84993 23.5149C7.19753 23.5434 8.50405 23.0503 9.49664 22.1383L11.515 20.1667C11.7143 19.9493 11.8238 19.6644 11.8216 19.3695C11.8194 19.0746 11.7055 18.7915 11.503 18.5771C11.3004 18.3627 11.0242 18.233 10.7299 18.2141C10.4356 18.1951 10.145 18.2884 9.91664 18.475ZM22.3883 1.86167C21.4069 0.886343 20.0794 0.338921 18.6958 0.338921C17.3122 0.338921 15.9847 0.886343 15.0033 1.86167L12.985 3.83333C12.7857 4.05074 12.6761 4.33556 12.6784 4.63048C12.6806 4.9254 12.7944 5.20853 12.997 5.4229C13.1995 5.63728 13.4757 5.76698 13.7701 5.78593C14.0644 5.80487 14.3549 5.71164 14.5833 5.525L16.6016 3.51833C17.1431 2.97685 17.8775 2.67265 18.6433 2.67265C19.4091 2.67265 20.1435 2.97685 20.685 3.51833C21.2265 4.05982 21.5307 4.79423 21.5307 5.56C21.5307 6.32577 21.2265 7.06018 20.685 7.60167L15.3883 12.91C14.8684 13.4316 14.1679 13.7333 13.4318 13.7529C12.6956 13.7724 11.9801 13.5083 11.4333 13.015L11.2933 12.8983C11.0721 12.6817 10.7739 12.5619 10.4643 12.5652C10.1547 12.5685 9.85907 12.6946 9.64247 12.9158C9.42588 13.1371 9.30604 13.4353 9.30932 13.7449C9.3126 14.0545 9.43874 14.3501 9.65997 14.5667C9.74511 14.6529 9.83468 14.7347 9.92831 14.8117C10.9254 15.6755 12.2129 16.1294 13.5313 16.0817C14.8497 16.0341 16.1011 15.4886 17.0333 14.555L22.3416 9.24667C23.3232 8.27142 23.879 6.94744 23.8878 5.56379C23.8965 4.18015 23.3575 2.84924 22.3883 1.86167Z"/>
				</svg>
			)
			break
	}
	return icon
}

export default Icons