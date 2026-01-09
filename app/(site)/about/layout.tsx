export default function RootLayout({
                                       children,
                                       me,
                                       us
                                   }: {
    children: React.ReactNode,
    me: React.ReactNode,
    us: React.ReactNode
}) {
    return (
        <div style={{border: "1px solid #fff"}}>
            {children}
            {me}
            {us}
        </div>
    );
}