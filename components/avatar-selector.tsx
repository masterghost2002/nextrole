import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui';
import { Button } from './ui/button';
import { useAvatarQuery } from '@/lib/hooks/query';
import { Loader2 } from 'lucide-react';

export type AvatarOption = {
  id: string;
  url: string;
  alt: string;
};

interface AvatarSelectorProps {
  selectedAvatarId: number | null;
  onAvatarSelect: (avatarId: number) => void;
  error?: string;
}

const Loading = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <Loader2 className="h-4 w-4 animate-spin" />
    </div>
  );
};

export function AvatarSelector({
  selectedAvatarId,
  onAvatarSelect,
  error
}: AvatarSelectorProps) {
  const [open, setOpen] = useState(false);

  const handleAvatarSelect = (
    avatar: DatabaseSchema['public']['Tables']['avatars']['Row']
  ) => {
    onAvatarSelect(avatar.id);
    setOpen(false);
  };

  const { data: avatars = [], isLoading } = useAvatarQuery();
  const selectedAvatar = avatars.find(
    (avatar) => avatar.id === selectedAvatarId
  );

  return (
    <div className="mb-6 flex flex-col items-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="cursor-pointer">
            <Avatar className="h-32 w-32 border-4 border-[#D91656]">
              {selectedAvatar ? (
                <AvatarImage
                  src={selectedAvatar.url}
                  alt={selectedAvatar.name}
                />
              ) : (
                <AvatarFallback className="bg-neutral-100 text-neutral-400">
                  No avatar
                </AvatarFallback>
              )}
            </Avatar>
            <Button
              type="button"
              variant="secondary"
              className="mt-2 px-3 py-2"
            >
              Select Avatar
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Choose your avatar</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4 p-4 md:grid-cols-4">
            {isLoading && <Loading />}
            {avatars.map((avatar) => (
              <div
                key={avatar.id}
                className={`cursor-pointer transition-all ${
                  selectedAvatarId === avatar.id
                    ? 'ring-4 ring-[#D91656] ring-offset-2'
                    : 'hover:scale-105'
                }`}
                onClick={() => handleAvatarSelect(avatar)}
              >
                <Avatar className="h-24 w-24">
                  <AvatarImage src={avatar.url} alt={avatar.name} />
                  <AvatarFallback>Avatar</AvatarFallback>
                </Avatar>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      {error && <p className="mt-1 text-sm text-[#D91656]">{error}</p>}
    </div>
  );
}
