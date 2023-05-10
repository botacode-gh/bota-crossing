import styled from "styled-components";

const IconContainer = styled.span``;

const Icon = styled.img`
  scale: 0.65;
`;

const CURRENCY_ICONS = [
  {
    currency: "Bells",
    src: "https://dodo.ac/np/images/thumb/4/49/99k_Bells_NH_Inv_Icon_cropped.png/30px-99k_Bells_NH_Inv_Icon_cropped.png",
  },
  {
    currency: "Poki",
    src: "https://dodo.ac/np/images/thumb/f/fb/Poki_NH_Inv_Icon_cropped.png/30px-Poki_NH_Inv_Icon_cropped.png",
  },
];

export default function CurrencyIcon({ currency }) {
  const src = CURRENCY_ICONS.find((icon) => icon.currency === currency).src;
  return (
    <IconContainer>
      <Icon src={src} alt={currency} />
    </IconContainer>
  );
}
