import { useDispatch, useSelector } from 'react-redux';
import { Button, Item, List } from './ContactList.styled';
import { selectVisibleContacts } from '../redux/selectors';
import { deleteContact } from '../redux/operations';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispath = useDispatch();

  return (
    <>
      {visibleContacts.length > 0 && (
        <List>
          {visibleContacts.map(contact => (
            <Item key={contact.id}>
              {contact.name}: {contact.phone}
              <Button
                type="button"
                onClick={() => dispath(deleteContact(contact.id))}
              >
                Delete
              </Button>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
