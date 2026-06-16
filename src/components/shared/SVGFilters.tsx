export function SVGFilters() {
  return (
    <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
      <defs>
        <filter id="distress" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035"
            numOctaves={5}
            result="noise"
            seed={3}
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={3}
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.06"
            numOctaves={4}
            result="noise2"
            seed={7}
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.3 0"
            in="noise2"
            result="mask"
          />
          <feComposite in="displaced" in2="mask" operator="in" result="clipped" />
          <feMerge>
            <feMergeNode in="clipped" />
            <feMergeNode in="displaced" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}
