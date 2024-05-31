import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

const { Text } = Typography;

interface NoteLinkProps {
    text: string;
    actionText: string;
    actionLink: string;
}

const NoteLink: React.FC<NoteLinkProps> = ({ text, actionText, actionLink }) => {
    return (
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <Text>{text} <Link to={actionLink}>{actionText}</Link></Text>
        </div>
    );
};

export default NoteLink;
