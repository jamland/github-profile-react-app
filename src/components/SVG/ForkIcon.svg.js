import React from "react";

const SVG = ({
  style = {},
  fill = "currentcolor",
  width = "100%",
  className = "",
  height = "100%",
  viewBox = "0 0 32 32",
}) => (
  <svg
    viewBox={viewBox}
    width={width}
    height={height}
    style={style}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 28c0-.556-.194-1.028-.583-1.417A1.929 1.929 0 009 26c-.556 0-1.028.194-1.417.583A1.929 1.929 0 007 28c0 .556.194 1.028.583 1.417.39.389.861.583 1.417.583s1.028-.194 1.417-.583c.389-.39.583-.861.583-1.417zm0-24c0-.556-.194-1.028-.583-1.417A1.929 1.929 0 009 2c-.556 0-1.028.194-1.417.583A1.929 1.929 0 007 4c0 .556.194 1.028.583 1.417C7.973 5.806 8.444 6 9 6s1.028-.194 1.417-.583C10.806 5.027 11 4.556 11 4zm13.333 2.667c0-.556-.194-1.028-.583-1.417a1.929 1.929 0 00-1.417-.583c-.555 0-1.027.194-1.416.583a1.929 1.929 0 00-.584 1.417c0 .555.195 1.027.584 1.416.389.39.86.584 1.416.584.556 0 1.028-.195 1.417-.584.389-.389.583-.86.583-1.416zm2 0c0 .722-.18 1.392-.541 2.01a3.89 3.89 0 01-1.459 1.448c-.027 3.986-1.597 6.861-4.708 8.625-.944.528-2.354 1.09-4.23 1.688-1.777.555-2.954 1.048-3.53 1.479-.577.43-.865 1.125-.865 2.083v.542a3.89 3.89 0 011.458 1.448c.361.618.542 1.288.542 2.01 0 1.111-.389 2.056-1.167 2.833C11.056 31.611 10.111 32 9 32c-1.111 0-2.056-.389-2.833-1.167C5.389 30.056 5 29.111 5 28c0-.722.18-1.392.542-2.01A3.89 3.89 0 017 24.542V7.458A3.89 3.89 0 015.542 6.01 3.916 3.916 0 015 4c0-1.111.389-2.056 1.167-2.833C6.944.389 7.889 0 9 0c1.111 0 2.056.389 2.833 1.167C12.611 1.944 13 2.889 13 4c0 .722-.18 1.392-.542 2.01A3.89 3.89 0 0111 7.458v10.354c.75-.36 1.82-.756 3.208-1.187a29.922 29.922 0 001.823-.615 18.81 18.81 0 001.469-.645c.528-.257.938-.532 1.23-.823.29-.292.572-.646.843-1.063.27-.416.465-.9.583-1.448a9.132 9.132 0 00.177-1.906 3.89 3.89 0 01-1.458-1.448 3.916 3.916 0 01-.542-2.01c0-1.111.39-2.056 1.167-2.834.778-.777 1.722-1.166 2.833-1.166 1.111 0 2.056.389 2.834 1.166.777.778 1.166 1.723 1.166 2.834z"
      fill={fill}
      fillRule="nonzero"
    />
  </svg>
);

export default React.memo(SVG);
