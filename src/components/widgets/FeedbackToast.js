import { useToasts } from 'react-toast-notifications';

export default function FeedbackToast({ message, options }) {
    const { addToast } = useToasts();

    return addToast(message, options);
}
