import styled from "styled-components";

export default function CurrencyIcon({ currency }) {
  const src = CURRENCY_ICONS[currency];
  return <Icon src={src} alt={currency} />;
}

const Icon = styled.img`
  scale: 0.65;
`;

const CURRENCY_ICONS = {
  Bells:
    "https://dodo.ac/np/images/thumb/4/49/99k_Bells_NH_Inv_Icon_cropped.png/30px-99k_Bells_NH_Inv_Icon_cropped.png",
  Poki: "https://dodo.ac/np/images/thumb/f/fb/Poki_NH_Inv_Icon_cropped.png/30px-Poki_NH_Inv_Icon_cropped.png",
  "Heart Crystals":
    "https://dodo.ac/np/images/thumb/3/3c/Heart_Crystal_NH_Inv_Icon.png/32px-Heart_Crystal_NH_Inv_Icon.png",
  "Nook Points": "https://dodo.ac/np/images/4/4f/Nook_Points_NH_Icon.svg",
  "Nook Miles":
    "https://dodo.ac/np/images/thumb/b/b2/Nook_Miles_NH_Icon_Cropped.png/18px-Nook_Miles_NH_Icon_Cropped.png",
};
