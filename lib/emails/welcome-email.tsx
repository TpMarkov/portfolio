import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
    firstName?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "";

export const WelcomeEmail = ({ firstName }: WelcomeEmailProps) => (
    <Html>
        <Head />
        <Preview>Welcome to webdevstudioHQ - Let's build something epic together!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={`https://portfolio-xi-umber-iqmksi764o.vercel.app/images/webdevstudiohq-logo.png`}
                    width="60"
                    height="60"
                    alt="webdevstudioHQ"
                    style={logo}
                />
                <Heading style={heading}>
                    Hey {firstName}! Welcome on board.
                </Heading>
                <Section style={section}>
                    <Text style={paragraph}>
                        We're thrilled to have you join <strong>webdevstudioHQ</strong>. You've just stepped into a community dedicated to premium web solutions and digital excellence.
                    </Text>
                    <Text style={paragraph}>
                        Whether you're looking to explore our latest projects, collaborate on a new venture, or simply keep in touch, we're here to help you grow.
                    </Text>
                    <Hr style={hr} />
                    <Text style={footer}>
                        webdevstudioHQ • Designed for global digital safety<br />
                        Lovech, Bulgaria
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default WelcomeEmail;

const main = {
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "40px 20px",
    maxWidth: "580px",
};

const logo = {
    margin: "0 auto",
    display: "block",
};

const heading = {
    fontSize: "24px",
    fontWeight: "800",
    textAlign: "center" as const,
    margin: "30px 0",
    textTransform: "uppercase" as const,
    letterSpacing: "-0.025em",
    color: "#020617",
};

const section = {
    padding: "0 20px",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
    color: "#475569",
};

const hr = {
    borderColor: "#e2e8f0",
    margin: "30px 0",
};

const footer = {
    color: "#94a3b8",
    fontSize: "12px",
    fontWeight: "700",
    textAlign: "center" as const,
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
};
