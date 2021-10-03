import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import Error from '../Helper/Error';
import { COMMENT_POST } from '../../api/Api';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComments('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <from className={styles.form} onSubmit={handleSubmit}>
      <textarea
        ClassName={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button ClassName={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </from>
  );
};

export default PhotoCommentsForm;
