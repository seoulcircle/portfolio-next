import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { colors, spacing, typography, shadows } from "@/styles/tokens";
import { breakpoints } from "@/styles/theme";

export const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.overlay.light};
  z-index: 1000;
`;

export const ModalContent = styled(motion.div)<{
  customWidth?: string;
  customHeight?: string;
  mobileWidth?: string;
  mobileHeight?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${({ customWidth }) => customWidth ?? "auto"};
  height: ${({ customHeight }) => customHeight ?? "auto"};
  background-color: ${colors.glass.light};
  backdrop-filter: ${colors.glass.backdropFilter};
  -webkit-backdrop-filter: ${colors.glass.webkitBackdropFilter};
  border-radius: ${spacing.md};
  padding: ${spacing.lg};
  box-shadow: ${shadows.md};
  color: ${colors.white};
  z-index: 999;

  @media (max-width: ${breakpoints.mobile}) {
    width: ${({ mobileWidth }) => mobileWidth ?? "300px"};
    height: ${({ mobileHeight }) => mobileHeight ?? "350px"};
    margin-top: 100px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${spacing.md};
  right: ${spacing.md};
  font-size: ${typography.fontSize.xxl};
  cursor: pointer;
  color: ${colors.white};
  background: none;
  border: none;
  padding: 0;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize.base};
  }
`;

export const Body = styled.div`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.normal};
`;
