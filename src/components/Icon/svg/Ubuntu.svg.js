import React, { Component } from 'react';

class Ubuntu extends Component {
  static defaultProps = {
    fillColor: '#00125F',
    height: 22,
    width: 23,
  };

  render() {
    const { className, fillColor, height, width } = this.props;

    return (
      <svg
        className={className}
        width={`${width}px`}
        height={`${height}px`}
        viewBox={`0 0 ${width} ${height}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>ubuntu</title>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="osquery-io-again-again"
            transform="translate(-787.000000, -369.000000)"
            fill={fillColor}
          >
            <g id="h1-page-title" transform="translate(474.000000, 253.000000)">
              <g
                id="compatible-platforms"
                transform="translate(238.000000, 115.000000)"
              >
                <path
                  d="M92.8654089,1.26315789 C93.9139978,1.26315789 94.762735,2.11073684 94.762735,3.15789474 C94.762735,4.20505263 93.9139978,5.05263158 92.8654089,5.05263158 C91.8180849,5.05263158 90.9680828,4.20505263 90.9680828,3.15789474 C90.9680828,2.11073684 91.8180849,1.26315789 92.8654089,1.26315789 Z M92.8654089,18.9473684 C93.9139978,18.9473684 94.762735,19.7949474 94.762735,20.8421053 C94.762735,21.8892632 93.9139978,22.7368421 92.8654089,22.7368421 C91.8180849,22.7368421 90.9680828,21.8892632 90.9680828,20.8421053 C90.9680828,19.7949474 91.8180849,18.9473684 92.8654089,18.9473684 Z M77.6867998,10.1052632 C78.7353887,10.1052632 79.584126,10.9528421 79.584126,12 C79.584126,13.0471579 78.7353887,13.8947368 77.6867998,13.8947368 C76.6394758,13.8947368 75.7894737,13.0471579 75.7894737,12 C75.7894737,10.9528421 76.6394758,10.1052632 77.6867998,10.1052632 Z M85.2897651,6.92513684 L83.381055,3.62450526 C84.7028589,2.92597895 86.208071,2.52682105 87.8056196,2.52682105 C88.4722135,2.52682105 89.1198341,2.59629474 89.7472166,2.7264 C89.7282434,2.86913684 89.7029457,3.00934737 89.7029457,3.1584 C89.7029457,4.89903158 91.1221456,6.31629474 92.8651559,6.31629474 C93.6025833,6.31629474 94.2742368,6.05229474 94.8118125,5.62787368 C96.2158339,7.16513684 97.1164313,9.16218947 97.2631579,11.3689263 L93.4343538,11.3689263 C93.115603,8.53061053 90.7338262,6.31629474 87.8056196,6.31629474 C86.8974328,6.31629474 86.0524902,6.54745263 85.2897651,6.92513684 Z M93.4348597,12.6315789 L97.262399,12.6315789 C97.1156724,14.8383158 96.2150749,16.8341053 94.8123185,18.3713684 C94.2734779,17.9482105 93.6030893,17.6842105 92.8656619,17.6842105 C91.1226516,17.6842105 89.7034516,19.1014737 89.7034516,20.8421053 C89.7034516,20.9898947 89.7274844,21.1313684 89.7477226,21.2741053 C89.1203401,21.4042105 88.4714545,21.4736842 87.8061255,21.4736842 C86.207312,21.4736842 84.7033648,21.0745263 83.381561,20.376 L85.2902711,17.0753684 C86.0517313,17.4517895 86.8979387,17.6842105 87.8061255,17.6842105 C90.7330673,17.6842105 93.1161089,15.4698947 93.4348597,12.6315789 Z M84.227389,16.3865684 L82.3072949,19.7061474 C80.6793891,18.5440421 79.4296836,16.8867789 78.7934469,14.9478316 C79.9912921,14.4968842 80.8488836,13.3512 80.8488836,11.9996211 C80.8488836,10.6493053 79.9912921,9.50235789 78.7934469,9.05267368 C79.4296836,7.11246316 80.6793891,5.45646316 82.3072949,4.29435789 L84.227389,7.61393684 C82.9473263,8.65604211 82.1137676,10.2223579 82.1137676,11.9996211 C82.1137676,13.7781474 82.9473263,15.3444632 84.227389,16.3865684 Z"
                  id="ubuntu"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export default Ubuntu;
