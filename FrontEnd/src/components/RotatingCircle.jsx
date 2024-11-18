import styled, { keyframes } from "styled-components";

/* eslint-disable react/prop-types */

// Keyframes for circular motion along the border
const rotateAroundBorder = (radius) => keyframes`
  0% {
    transform: rotate(0deg) translate(${radius}px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translate(${radius}px) rotate(-360deg);
  }
`;

// Styled component for the outer circle
const CircleOutline = styled.div`
  width: ${(props) => props.diameter || "400px"};
  height: ${(props) => props.diameter || "400px"};
  border: ${(props) => props.borderWidth || "3px"} solid
    ${(props) => props.borderColor || "#3498db"};
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  position: relative; /* For positioning the rotating object */
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Styled component for the rotating image
const RotatingImage = styled.img`
  width: ${(props) => props.size || "40px"};
  height: ${(props) => props.size || "40px"};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg); /* Center the image */
  transform-origin: ${(props) => props.orbitRadius}px center; /* Orbit around the circle */
  animation: ${(props) => rotateAroundBorder(props.orbitRadius)}
    ${(props) => props.rotationSpeed || 5}s linear infinite;
`;

// Reusable RotatingCircle Component
const RotatingCircle = ({
  diameter = 400,
  borderColor = "#3498db",
  borderWidth = "2px",
  backgroundColor = "transparent",
  imageSrc,
  imageSize = "50px",
  rotationSpeed = 15,
}) => {
  const orbitRadius = diameter / 2 - parseInt(imageSize) / 2; // Adjust orbit radius to align with border

  return (
    <CircleOutline
      diameter={`${diameter}px`}
      borderColor={borderColor}
      borderWidth={borderWidth}
      backgroundColor={backgroundColor}
    >
      <RotatingImage
        src={imageSrc}
        size={imageSize}
        orbitRadius={orbitRadius}
        rotationSpeed={rotationSpeed}
      />
    </CircleOutline>
  );
};

export default RotatingCircle;
