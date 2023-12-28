import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/filterSlice';
import { Field, Text } from './Filter.styled';
import { selectFilter } from '../redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispath = useDispatch();

  return (
    <>
      <Text>Find contacts by name</Text>
      <Field
        type="text"
        name="filter"
        value={filter}
        onChange={evt => dispath(changeFilter(evt.target.value))}
      />
    </>
  );
};
