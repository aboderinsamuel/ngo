"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

interface DonateButtonProps {
  className?: string;
}

export function DonateButton({ className }: DonateButtonProps) {
  const [amount, setAmount] = useState("25");
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountChange = (value: string) => {
    setAmount(value);
    if (value !== "custom") {
      setCustomAmount("");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={`bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-lg px-8 py-6 h-auto shadow-lg ${className}`}
        >
          Donate Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-primary/20 rounded-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-primary text-2xl">Support Our Cause</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Your donation helps us provide essential services to the West Hill community.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <RadioGroup
            value={amount}
            onValueChange={handleAmountChange}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {["10", "25", "50", "100", "250", "custom"].map((value) => (
              <div key={value} className="flex items-center space-x-2">
                <RadioGroupItem value={value} id={`amount-${value}`} className="peer sr-only" />
                <Label
                  htmlFor={`amount-${value}`}
                  className="flex flex-col items-center justify-between rounded-xl border-2 border-border bg-background p-4 hover:bg-accent/10 hover:text-primary peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full text-center cursor-pointer transition-all"
                >
                  {value === "custom" ? "Custom" : `$${value}`}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {amount === "custom" && (
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Label htmlFor="custom-amount" className="text-muted-foreground">
                Enter amount
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="custom-amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="pl-7 bg-background border-input text-foreground rounded-xl"
                  placeholder="Enter amount"
                  type="number"
                  min="1"
                />
              </div>
            </motion.div>
          )}

          <div className="flex flex-col space-y-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6">
              Donate with PayPal
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-xl py-6">
              Donate with Credit Card
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
