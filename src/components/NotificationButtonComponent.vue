<template>
  <ion-button @click="localNotification">Trigger Notificatie</ion-button>
  <ion-select v-model="selectedOption">
    <ion-select-option v-for="option in messageOptions" :value="option.value" :key="option.value">
      {{ option.value }}
    </ion-select-option>
  </ion-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonButton, IonSelect } from '@ionic/vue';
import { LocalNotifications } from '@capacitor/local-notifications';

interface Option {
  value: string;
  title: string;
  content: string;
}

export default defineComponent ({
  components: {
    IonButton,
    IonSelect
  },
  data() {
    return {
      selectedOption: 'Trap naar boven' as string,
      messageOptions: [
        { value: 'Trap naar boven', title: 'Brand op de 2e verdieping', content: 'Blijf kalm, ga met de trap naar de bovenste verdieping en wacht op de hulpverleners.' },
        { value: 'Trap naar beneden', title: 'Brand op de 5e verdieping', content: 'Blijf kalm, ga met de trap naar beneden en wacht buiten op instructies van de brandweer.' },
        { value: 'Brand zelfde etage', title: 'Brand op uw etage', content: 'Blijf kalm, blijf in uw appartament. De brandweer is onderweg om u veilig uit het appartement te halen.' },
      ] as Option[]
    };
  },
  methods: {
    localNotification() {
      const selectedOptionObj = this.messageOptions.find((option: Option) => option.value === this.selectedOption);
      if (selectedOptionObj) {
        LocalNotifications.requestPermissions()
          .then((permission) => {
            if (permission.display) {
              const notification = {
                title: selectedOptionObj.title,
                body: selectedOptionObj.content,
                id: 1,
                schedule: { at: new Date(Date.now() + 10000) },
                actionTypeId: '',
                extra: null,
                sound: "default"
              };

              LocalNotifications.schedule({ notifications: [notification] })
                .then(() => {
                  console.log('Notificatie gepland:', notification);
                })
                .catch((error) => {
                  console.error('Er is een fout opgetreden bij het plannen van de notificatie:', error);
                });
            } else {
              console.log('Notificatietoestemming is geweigerd.');
            }
          })
          .catch((error) => {
            console.error('Er is een fout opgetreden bij het aanvragen van notificatietoestemming:', error);
          });
      }
    }
  }
});
</script>

<style scoped>
 
</style>
