import UserCard from "../components/UserCard";
import { User } from "../types/User";

interface DetailPageProps {
  user: User | null;
}

const UserDetailPage: React.FC<DetailPageProps> = ({ user }) => {
  return <UserCard user={user} />;
};

export default UserDetailPage;
