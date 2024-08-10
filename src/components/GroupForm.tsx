import { IonIcon, IonButton, IonItem, IonInput } from '@ionic/react';
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';
import ExploreContainer from './ExploreContainer';
import './GroupForm.css';

const GroupForm: React.FC = () => {
  return (
    <>
      <div className="form-title">
        <IonIcon icon={closeCircleOutline} size="large" color="primary"></IonIcon>
        <p>Create Group</p>
        <IonIcon icon={checkmarkCircleOutline} size="large" color="primary"></IonIcon>
      </div>
      <IonItem>
        <IonInput label="Group Name" labelPlacement="stacked" placeholder="Enter text"></IonInput>
      </IonItem>
    </>
  );
};

export default GroupForm;
