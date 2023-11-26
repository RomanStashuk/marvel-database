const Spinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: 'auto',
        background: 'rgb(255, 255, 255)',
        display: 'block',
        shapeRendering: 'auto',
      }}
      width="150px"
      height="150px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <rect x="18.5" y="18.5" width="15" height="15" fill="#ec1d24">
        <animate
          attributeName="fill"
          values="#212529;#ec1d24;#ec1d24"
          keyTimes="0;0.08333333333333333;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="34.5" y="18.5" width="15" height="15" fill="#ec1d24">
        <animate
          attributeName="fill"
          values="#212529;#ec1d24;#ec1d24"
          keyTimes="0;0.08333333333333333;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.08333333333333333s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="50.5" y="18.5" width="15" height="15" fill="#ec1d24">
        <animate
          attributeName="fill"
          values="#212529;#ec1d24;#ec1d24"
          keyTimes="0;0.08333333333333333;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.16666666666666666s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="66.5" y="18.5" width="15" height="15" fill="#ec1d24">
        <animate
          attributeName="fill"
          values="#212529;#ec1d24;#ec1d24"
          keyTimes="0;0.08333333333333333;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.25s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="18.5" y="34.5" width="15" height="15" fill="#ec1d24">
        <animate
          attributeName="fill"
          values="#212529;#ec1d24;#ec1d24"
          keyTimes="0;0.08333333333333333;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.9166666666666666s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="66.5" y="34.5" width="15" height="15" fill="#ec1d24">
        <animate
          attributeName="fill"
          values="#212529;#ec1d24;#ec1d24"
          keyTimes="0;0.08333333333333333;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.3333333333333333s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="18.5" y="50.5" width="15" height="15" fill="#ec1d24">
        <animate
          attributeName="fill"
          values="#212529;#ec1d24;#ec1d24"
          keyTimes="0;0.08333333333333333;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.8333333333333334s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="66.5" y="50.5" width="15" height="15" fill="#ec1d24">
        <animate
          attributeName="fill"
          values="#212529;#ec1d24;#ec1d24"
          keyTimes="0;0.08333333333333333;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.4166666666666667s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="18.5" y="66.5" width="15" height="15" fill="#ec1d24">
        <animate
          attributeName="fill"
          values="#212529;#ec1d24;#ec1d24"
          keyTimes="0;0.08333333333333333;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.75s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="34.5" y="66.5" width="15" height="15" fill="#ec1d24">
        <animate
          attributeName="fill"
          values="#212529;#ec1d24;#ec1d24"
          keyTimes="0;0.08333333333333333;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.6666666666666666s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="50.5" y="66.5" width="15" height="15" fill="#ec1d24">
        <animate
          attributeName="fill"
          values="#212529;#ec1d24;#ec1d24"
          keyTimes="0;0.08333333333333333;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.5833333333333334s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="66.5" y="66.5" width="15" height="15" fill="#ec1d24">
        <animate
          attributeName="fill"
          values="#212529;#ec1d24;#ec1d24"
          keyTimes="0;0.08333333333333333;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.5s"
          calcMode="discrete"
        ></animate>
      </rect>
    </svg>
  );
};

export default Spinner;
