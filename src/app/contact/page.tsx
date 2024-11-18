"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { InputWithLabelProps } from "@/lib/types";

import Button from "@/components/Button";
import InputWithLabel from "@/components/input/InputWithLabel";
import PageTitle from "@/components/PageTitle";

const MESSAGE_MAX_LENGTH = 10;

const contactForm = z.object({
  username: z.string().min(1, "Le pseudo ne doit pas être vide."),
  email: z
    .string()
    .min(1, "L'email ne doit pas être vide.")
    .email("L'email est invalide."),
  message: z
    .string()
    .min(1, "Le message ne doit pas être vide.")
    .max(
      MESSAGE_MAX_LENGTH,
      `Le message doit contenir moins de ${MESSAGE_MAX_LENGTH} caractères.`
    ),
});

type TContactForm = z.infer<typeof contactForm>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TContactForm>({ resolver: zodResolver(contactForm) });

  // const onSubmit: SubmitHandler<TContactForm> = async (data) => {
  //   try {
  //     const response = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     });
  //     if (response.ok) {
  //       console.log("Message envoyé !");
  //     } else {
  //       console.error("Erreur lors de l'envoi.");
  //     }
  //   } catch (error) {
  //     console.error("Erreur réseau : ", error);
  //   }
  // };

  const onSubmit: SubmitHandler<TContactForm> = (data) => {
    console.log("Success", data);
  };

  const inputs: InputWithLabelProps[] = [
    {
      label: "Nom d'utilisateur",
      name: "username",
      id: "username",
      placeholder: "Entrez votre pseudo",
    },
    {
      label: "E-mail",
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Entrez votre e-mail",
    },
    {
      label: "Message",
      type: "textarea",
      name: "message",
      id: "message",
      placeholder: "Tapez votre message",
      rows: 5,
      // maxLength: MESSAGE_MAX_LENGTH,
    },
  ];

  return (
    <div className="container p-2 mx-auto mt-3 grid gap-12">
      <PageTitle text="Contact" />
      <div className="mx-auto max-w-xl w-full px-4 py-6 sm:p-12 bg-slate-100 border rounded-md">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
          {inputs.map((input, i) => {
            const errorId = `${input.id}-error`;

            return (
              <div key={i}>
                <InputWithLabel
                  {...register(input.name as keyof TContactForm)}
                  label={input.label}
                  type={input.type}
                  id={input.id}
                  placeholder={input.placeholder}
                  rows={input.rows}
                  // maxLength={input.maxLength}
                  aria-invalid={!!errors[input.name as keyof TContactForm]}
                  aria-describedby={
                    errors[input.name as keyof TContactForm]
                      ? errorId
                      : undefined
                  }
                />
                {errors[input.name as keyof TContactForm] && (
                  <p id={errorId} className="text-red-500 text-sm">
                    {errors[input.name as keyof TContactForm]?.message}
                  </p>
                )}
              </div>
            );
          })}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Envoi en cours..." : "Valider"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
