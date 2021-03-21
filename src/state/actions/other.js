import {
  CHANGE_SECTION
} from '../reducers/other';

const changeSection = sectionName => ({
  type: CHANGE_SECTION, sectionName
});

export default changeSection;
