import React, { useState } from 'react';
import { Box, Flex, Image, Input, IconButton } from '@chakra-ui/react';
import { MessageOutlined, SearchOutlined } from '@ant-design/icons';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Divider } from 'antd';

const Header = () => {
  const navigate = useNavigate();
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchName, setSearchName] = useState('');

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible); // Toggle search input visibility
  };

  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchName.trim()) {
      navigate('/search/' + searchName);
      setSearchVisible(false);
    }
  };

  return (
    <div className='header-container'>
      <Flex as="header" width="100%" alignItems="center">
        <Box>
          <IconButton
            icon={<SearchOutlined />}
            onClick={handleSearchClick}
            style={{ fontSize: '24px' }}
          />
        </Box>
        <Box flex="1" textAlign="center">
          <Image
            src="src/assets/Logo-tuktuk-pj.png"
            alt="logo-Tuktuk"
            className='logo-header'
            maxWidth="50px"
            margin="0 auto"
          />
        </Box>
        <Box>
          <Link to='/chat'>
            <MessageOutlined style={{ fontSize: '24px' }} />
          </Link>
        </Box>
      </Flex>
      <Divider />
      {searchVisible && (
        <Flex justifyContent="center" marginTop="10px">
          <Input
            value={searchName}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            placeholder="Search user"
            size="sm"
            width="200px"
          />
        </Flex>
      )}
    </div>
  );
};

export default Header;
