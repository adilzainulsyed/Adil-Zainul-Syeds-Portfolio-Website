import { useMutation } from "@tanstack/react-query";
import { api, type InsertMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      // Validate with shared schema before sending
      const validated = api.contact.submit.input.parse(data);

      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Validation failed");
        }
        throw new Error("System error: Message transmission failed");
      }

      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "TRANSMISSION SUCCESSFUL",
        description: "Message sent. Awaiting response.",
        className: "border-primary text-primary bg-black font-mono",
      });
    },
    onError: (error) => {
      toast({
        title: "TRANSMISSION FAILED",
        description: error.message,
        variant: "destructive",
        className: "border-destructive text-destructive bg-black font-mono",
      });
    },
  });
}
