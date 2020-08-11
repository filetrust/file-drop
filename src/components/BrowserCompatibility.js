import {isEdge} from 'react-device-detect';

const useClipPath = !isEdge;

export { useClipPath };
