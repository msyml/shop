import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const toPage = (path: string) => {
      router.push({ path });
    };
    return {
      toPage,
    };
  },
};
