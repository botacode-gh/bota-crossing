import styled from "styled-components";

const Icon = styled.img`
  scale: 0.65;
`;

const CURRENCY_ICONS = {
  Bells:
    "https://dodo.ac/np/images/thumb/4/49/99k_Bells_NH_Inv_Icon_cropped.png/30px-99k_Bells_NH_Inv_Icon_cropped.png",
  Poki: "https://dodo.ac/np/images/thumb/f/fb/Poki_NH_Inv_Icon_cropped.png/30px-Poki_NH_Inv_Icon_cropped.png",
};

export default function CurrencyIcon({ currency }) {
  const src = CURRENCY_ICONS[currency];
  return <Icon src={src} alt={currency} />;
}
