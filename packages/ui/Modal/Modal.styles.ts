import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  colors,
  spacing,
  typography,
  shadows,
} from "../../styles/tokens/legacy";
import { breakpoints } from "../../styles/theme";
import { ModalProps } from "./Modal.types";
export const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.overlay.light};
  z-index: 1000;
`;

export const ModalContent = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "responsiveSize",
})<{ responsiveSize?: ModalProps["responsiveSize"] }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${({ responsiveSize }) => responsiveSize?.desktop?.width ?? "auto"};
  height: ${({ responsiveSize }) => responsiveSize?.desktop?.height ?? "auto"};
  background-color: ${colors.glass.light};
  backdrop-filter: ${colors.glass.backdropFilter};
  -webkit-backdrop-filter: ${colors.glass.webkitBackdropFilter};
  border-radius: ${spacing.md};
  padding: ${spacing.lg};
  box-shadow: ${shadows.md};
  color: ${colors.white};
  z-index: 999;

  @media (max-width: ${breakpoints.mobile}) {
    width: ${({ responsiveSize }) => responsiveSize?.mobile?.width ?? "300px"};
    height: ${({ responsiveSize }) =>
      responsiveSize?.mobile?.height ?? "350px"};
    margin-top: 100px;
  }
`;

export const Body = styled.div`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.normal};
`;
