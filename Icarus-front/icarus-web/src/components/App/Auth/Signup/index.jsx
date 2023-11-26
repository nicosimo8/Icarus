import { addMegaUser } from '../../../../redux/megaUser/thunks'
import Form from "../../Shared/Form";

const MegaUserCreation = () => {
  return (
    <Form type={'superadmin'} addMethod={addMegaUser} />
  );
}

export default MegaUserCreation;