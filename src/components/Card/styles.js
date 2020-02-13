import styled from 'styled-components/native'

export const Container = styled.View`
    width: 160px;
    padding: 15px 0px;
`;

export const Photo = styled.Image`
    background-color: #888;
    width: 150px;
    height: 150px;
    border-radius: 6px;
    margin-right: 8px;
`;

export const ContainerSubtitle = styled.View`
    flex-direction: column;
    padding: 10px 0px;
`;

export const SubtitleTitle = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 2px 0px;
`;
export const SubTitleDescription = styled.Text`
    color: #999;
    font-size: 12px;
`;