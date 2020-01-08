import styled from 'styled-components';
import { animated } from 'react-spring';

export const CardWrapper = styled(animated.div)`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background: #153065;
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028),
    0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042),
    0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;

export const CardHeader = styled.div``;
export const CardCurrentTask = styled.div``;
export const CardDetails = styled.div``;
export const CardDueDate = styled.div``;
