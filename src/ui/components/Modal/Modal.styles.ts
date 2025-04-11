import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { colors, spacing, typography, shadows } from "@/styles/tokens";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.overlay.light};
  z-index: 1000;
`;

export const ModalContent = styled(motion.div)`
  position: relative;
  background-color: ${colors.glass.light};
  border-radius: ${spacing.md};
  padding: ${spacing.lg};
  max-width: 500px;
  width: 90%;
  box-shadow: ${shadows.md};
  color: ${colors.white};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${spacing.md};
  right: ${spacing.md};
  font-size: ${typography.fontSize.xl};
  cursor: pointer;
  color: ${colors.gray[600]};
  background: none;
  border: none;
  padding: 0;

  &:hover {
    color: ${colors.gray[900]};
  }
`;

export const Title = styled.h2`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: ${spacing.md};
`;

export const Body = styled.div`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.normal};
`;
