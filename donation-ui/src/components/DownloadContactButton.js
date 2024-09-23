import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Box, Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";

import QRCodeComponent from "./QRCodeComponent";

const DownloadContactButton = ({ contact, isMobile }) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
ORG:${contact.organization}
TITLE:${contact.title}
TEL:${contact.phone}
EMAIL:${contact.email}
ADR:${contact.address}
URL:${contact.profileData.portfolioLink}
NOTE:${contact.profileData.bio}
${contact.socialLinks?.join("\n")}
END:VCARD
    `;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${contact.name}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setLoading(false);
  };

  if (!(contact.name && contact.email)) {
    return null;
  }

  let url = "";
  if (typeof window !== "undefined") {
    url = window.location && window.location.href;
  }
  if (!isMobile && url) {
    return (
      <Box mt={2}>
        <QRCodeComponent link={url} />
      </Box>
    );
  }

  return (
    <Button
      variant="contained"
      color="inherit"
      onClick={handleDownload}
      disabled={loading}
      style={{
        marginTop: "2em",
        paddingLeft: "1.5em",
        paddingRight: "1.5em",
        fontWeight: "550"
      }}
      //   size="small"
      startIcon={<ContactMailIcon />}
    >
      {loading ? <CircularProgress size={24} /> : "Save Contact"}
    </Button>
  );
};

export default DownloadContactButton;
