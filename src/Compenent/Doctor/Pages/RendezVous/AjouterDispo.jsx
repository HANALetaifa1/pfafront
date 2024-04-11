import { useForm } from 'react-hook-form';
// export default function Demadeur() {
  export const AjouterDispo = ({ addEvent }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Ajoutez l'événement à la liste des événements
    addEvent({
      title: data.title,
      start: new Date(data.start),
      end: new Date(data.end),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Titre de l'événement :
        <input type="text" {...register('title', { required: true })} />
      </label>
      <label>
        Date de début :
        <input type="datetime-local" {...register('start', { required: true })} />
      </label>
      <label>
        Date de fin :
        <input type="datetime-local" {...register('end', { required: true })} />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
};
